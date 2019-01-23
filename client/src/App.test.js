
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const {calculatePrice} = require('./components/order/OrderList');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('should output the total of the order', () => {
    expect(calculatePrice()).toBe(0);
});