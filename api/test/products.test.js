const request = require('supertest');
const app = require('../../app');

const mongoose = require("mongoose");
const Product = require("../models/product");

/*
      declare the token variable in a scope accessible
      by the entire test suite
    */

let token;
let productId;

beforeAll((done) => {
    request(app)
        .post('/user/login')
        .send({
            email: 'test@gmail.com',
            password: 'Madushan@123',
        })
        .end((err, response) => {
            token = response.body.token; // save the token!
            const product = new Product({
                _id: new mongoose.Types.ObjectId(),
                name: 'product for testing',
                price: 0
            });
            product
                .save()
                .then(result => {
                    console.log('successful' + result);
                    productId = result._id;
                    done();
                })
                .catch(err => {
                    console.log('error' + err)
                });

        });

});

describe('Test whether the unauthorized paths show error messages', () => {
    test('It should responsd with the 401', () => {
        return request(app)
            .get("/products")
            .then(response => {
                expect(response.statusCode).toBe(401)
            })
    });
});

describe('Test whether the unauthorized paths show error messages', () => {
    test('It should responsd with the 401', () => {
        return request(app)
            .get("/products/5c418898a26a6d584fd9af27")
            .then(response => {
                expect(response.statusCode)
                    .toBe(401)
            })
    });
});

describe('Test whether the unauthorized paths show error messages', () => {
    test('It should responsd with the 401', () => {
        return request(app)
            .delete("/products/5c418898a26a6d584fd9af27").then(response => {
                expect(response.statusCode).toBe(401)
            })
    });
});

describe('Test whether the unauthorized paths show error messages', () => {
    test('It should responsd with the 401', () => {
        return request(app)
            .get("/products")
            .set('Accept', 'application/json')
            .then(response => {
                expect(response.statusCode).toBe(401)
            })
    });
});

describe('Test whether the /products end point returns 200', () => {
    test('It should return 200 as status code', () => {
        return request(app)
            .get("/products/")
            .set('Cookie', 'SyscoPOSCookie=' + token)
            .then(response => {
                expect(response.statusCode).toBe(200)
            })
    });
});

describe('Test whether the /products return product data', () => {
    test('It should return product objects as data', () => {
        return request(app)
            .get("/products/")
            .set('Cookie', 'SyscoPOSCookie=' + token)
            .then(response => {
                expect(response.body).toBeTruthy();
            })
    });
});

afterAll(() => {
    Product.remove({_id: productId})
        .exec()
        .then(result => {
            console.log(JSON.stringify(result))
        })
        .catch(err => {
            console.log(JSON.stringify(err))
        });

});