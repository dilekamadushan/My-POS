const request = require('supertest');
const app = require('../../app');

describe('Test whether the undefined paths show error status code', () => {
    test('It should responsd the GET method with 404', () => {
        return request(app).get("/").then(response => {
            expect(response.statusCode).toBe(404)
        })
    });
});

describe('Test whether the unauthorized paths show error messages', () => {
    test('It should responsd with the 401', () => {
        return request(app).get("/orders").then(response => {
            expect(response.statusCode).toBe(401)
        })
    });
});