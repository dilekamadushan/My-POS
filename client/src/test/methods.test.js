const {getPrice} = require('../components/utils');

const orders = [{quantity: 3, product: {price: 23}}, {quantity: 5, product: {price: 100}}];

it('should output the total of the order', () => {
    expect(getPrice(orders)).toBe(569);
});