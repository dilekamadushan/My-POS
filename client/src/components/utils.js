const getPrice = (orders) => {
    let sum = 0;
    orders.forEach(obj => {
        sum += (obj.product.price * obj.quantity);
    });
    return sum;
};

exports.getPrice = getPrice;