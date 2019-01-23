const request = require('supertest');
const app = require('../../app');

describe('Test whether the undefined paths show error status code', () => {
    test('It should response the GET method', () => {
        return request(app).get("/").then(response => {
            expect(response.statusCode).toBe(404)
        })
    });
});

describe('Test whether the unauthorized methods show error messages', () => {
    test('It should response the GET method', () => {
        return request(app).get("/orders").then(response => {
            expect(response.statusCode).toBe(401)
        })
    });
});