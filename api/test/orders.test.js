const request = require('supertest');
const app = require('../../app');

const mongoose = require("mongoose");
const Order = require("../models/order");

/*
      declare the token variable in a scope accessible
      by the entire test suite
    */

let token;
let orderId;

beforeAll((done) => {
    request(app)
        .post('/user/login')
        .send({
            email: 'test@gmail.com',
            password: 'Madushan@123',
        })
        .end((err, response) => {
            token = response.body.token; // save the token!
            const order = new Order({
                _id: new mongoose.Types.ObjectId(),
                name: 'order for testing',
                product: '5c418898a26a6d584fd9af27',
                userOrderId: '5c3bc2f4fe5e56139ac248da',
                quantity: 0
            });
            order
                .save()
                .then(result => {
                    console.log('successful' + result);
                    orderId = result._id;
                    done();
                })
                .catch(err => {
                    console.log('error:' + err);
                });

        });

});

describe('Test whether the unauthorized paths show error messages', () => {
    test('It should responsd with the 401', () => {
        return request(app)
            .get("/orders")
            .then(response => {
                expect(response.statusCode).toBe(401)
            })
    });
});

describe('Test whether the unauthorized paths show error messages', () => {
    test('It should respond with the 401', () => {
        return request(app)
            .delete(`/orders/${orderId}`).then(response => {
                expect(response.statusCode).toBe(401)
            })
    });
});

describe('Test whether the unauthorized paths show error messages', () => {
    test('It should responsd with the 401', () => {
        return request(app)
            .get("/orders")
            .set('Accept', 'application/json')
            .then(response => {
                expect(response.statusCode).toBe(401)
            })
    });
});

describe('Test whether the /order end point returns 200', () => {
    test('It should return 200 as status code', () => {
        return request(app)
            .get("/orders/")
            .set('Cookie', 'SyscoPOSCookie=' + token)
            .then(response => {
                expect(response.statusCode).toBe(200)
            })
    });
});

describe('Test whether the /orders return order data', () => {
    test('It should return product objects as data', () => {
        return request(app)
            .get("/orders/")
            .set('Cookie', 'SyscoPOSCookie=' + token)
            .then(response => {
                expect(response.body).toBeTruthy();
            })
    });
});

describe('Test whether the /orders/orderId return a order', () => {
    test('It should return an order as data', () => {
        return request(app)
            .get(`/orders/${orderId}`)
            .set('Cookie', 'SyscoPOSCookie=' + token)
            .then(response => {
                expect(response.body).toBeTruthy();
            })
    });
});

afterAll(() => {
    Order.remove({_id: orderId})
        .exec()
        .then(result => {
            console.log(JSON.stringify(result))
        })
        .catch(err => {
            console.log(JSON.stringify(err))
        });

});