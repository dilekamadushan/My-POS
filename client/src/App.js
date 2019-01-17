import React, { Component } from "react";

import { Provider } from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Products from './components/products.component';
import UserOrders from './components/userOrder/userOrders.component';
import Orders from './components/order/orders.component';
import signUp from './components/signup';
import signIn from './components/signin'

import Header from "./components/Header";

class App extends Component {

  render() {
    return (
     <Router>
        <Provider store={store}>
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <Link to={"/"} className="navbar-brand">
                HOME
              </Link>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                    <Link to={"/signup"} className="nav-link">
                      Sign Up
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link to={"/signin"} className="nav-link">
                      Sign In
                    </Link>
                  </li>
                </ul>

                {/*  <li className="nav-item">
                    <Link to={"/products"} className="nav-link">
                     Products
                    </Link>
                  
                  </li>
                  <li className="nav-item">
                    <Link to={"/userOrders"} className="nav-link">
                     User Orders
                    </Link>
                  
                  </li>*/}
                  <Header/>

              </div>
            </nav>{" "}
            <br />
            <h2>Welcome to Sysco LABS POS</h2> <br />
            <Switch>
            <Route exact path="/signup" component={signUp} />
              <Route exact path="/signin" component={signIn} />
              <Route path='/orders/:userOrderId' component={Orders} />
              <Route path="/products" component={Products} />
              <Route path="/userOrders" component={UserOrders} />
            </Switch>
          </div>
        </Provider>
      </Router>

    );
  }
}


export default App;
