const request = require('supertest');
const app = require('../../app');

describe('Test whether the userorders is authorized with correct parameters', () => {
    test('It should response the GET method', () => {
        return request(app)
            .get("/orders/userorders/5c427b745f892b1ea602aa86")
            .set('Cookie', 'SyscoPOSCookie=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5pbG1pbmlAZ21haWwuY29tIiwidXNlcklkIjoiNWM0NWQyZmZmMmUzMWMxZDcwNjA5NDZiIiwiaWF0IjoxNTQ4MjMyNzk0LCJleHAiOjE1NDgyMzYzOTR9.pm7d9-97PXW1YrOE0hLlJmG8v4xhRfXMyU8cWtGpXbo')
            .then(response => {
                expect(response.statusCode).toBe(200)
            })
    });
});

describe('Test whether the orders is authorized with correct parameters', () => {
    test('It should response the GET method', () => {
        return request(app)
            .get("/orders")
            .set('Cookie', 'SyscoPOSCookie=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5pbG1pbmlAZ21haWwuY29tIiwidXNlcklkIjoiNWM0NWQyZmZmMmUzMWMxZDcwNjA5NDZiIiwiaWF0IjoxNTQ4MjMyNzk0LCJleHAiOjE1NDgyMzYzOTR9.pm7d9-97PXW1YrOE0hLlJmG8v4xhRfXMyU8cWtGpXbo')
            .then(response => {
                expect(response.statusCode).toBe(200)
            })
    });
});

describe('Test whether the orders endpoint is authorized with correct parameters', () => {
    test('It should response the GET method', () => {
        return request(app)
            .get("/products")
            .set('Cookie', 'SyscoPOSCookie=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5pbG1pbmlAZ21haWwuY29tIiwidXNlcklkIjoiNWM0NWQyZmZmMmUzMWMxZDcwNjA5NDZiIiwiaWF0IjoxNTQ4MjMyNzk0LCJleHAiOjE1NDgyMzYzOTR9.pm7d9-97PXW1YrOE0hLlJmG8v4xhRfXMyU8cWtGpXbo')
            .then(response => {
                expect(response.statusCode).toBe(200)
            })
    });
});