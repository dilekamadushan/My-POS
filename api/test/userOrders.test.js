const request = require('supertest');
const app = require('../../app');

const mongoose = require("mongoose");
const UserOrder = require("../models/userOrder");

/*
      declare the token variable in a scope accessible
      by the entire test suite
    */

let token;
let userOrderId;

beforeAll((done) => {
    request(app)
        .post('/user/login')
        .send({
            email: 'test@gmail.com',
            password: 'Madushan@123',
        })
        .end((err, response) => {
            token = response.body.token; // save the token!
            const userOrder = new UserOrder({
                _id: new mongoose.Types.ObjectId(),
                name: 'user order for testing'
            });
            userOrder
                .save()
                .then(result => {
                    console.log('successful' + result);
                    userOrderId = result._id;
                    done();
                })
                .catch(err => {
                    console.log('error' + err)
                });

        });

});

describe('Test whether the unauthorized paths show error messages', () => {
    test('It should respond with the 401', () => {
        return request(app)
            .get("/userOrders")
            .then(response => {
                expect(response.statusCode).toBe(401)
            })
    });
});

describe('Test whether the unauthorized paths show error messages', () => {
    test('It should respond with the 401', () => {
        return request(app)
            .delete(`/userOrders/${userOrderId}`).then(response => {
                expect(response.statusCode).toBe(401)
            })
    });
});

describe('Test whether the /order end point returns 200', () => {
    test('It should return 200 as status code', () => {
        return request(app)
            .get("/userOrders/")
            .set('Cookie', 'SyscoPOSCookie=' + token)
            .then(response => {
                expect(response.statusCode).toBe(200)
            })
    });
});

describe('Test whether the /orders return order data', () => {
    test('It should return product objects as data', () => {
        return request(app)
            .get("/userOrders/")
            .set('Cookie', 'SyscoPOSCookie=' + token)
            .then(response => {
                expect(response.body).toBeTruthy();
            })
    });
});

describe('Test whether the /userOrders/userOrderId return a userOrder', () => {
    test('It should return an userOrder as data', () => {
        return request(app)
            .get(`/userOrders/${userOrderId}`)
            .set('Cookie', 'SyscoPOSCookie=' + token)
            .then(response => {
                expect(response.body).toBeTruthy();
            })
    });
});

describe('Test whether the /userOrders/userOrderId return a userOrder', () => {
    test('It should return an userOrder as data', () => {
        return request(app)
            .delete(`/userOrders/${userOrderId}`)
            .set('Cookie', 'SyscoPOSCookie=' + token)
            .then(response => {
                expect(response.body.message).toBe('UserOrder deleted');
            })
    });
});

afterAll(() => {
    UserOrder.remove({_id: userOrderId})
        .exec()
        .then(result => {
            console.log(JSON.stringify(result))
        })
        .catch(err => {
            console.log(JSON.stringify(err))
        });

});