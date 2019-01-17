import React, {Component} from "react";

import {Provider} from "react-redux";
import store from "./store";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";


import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';

import Products from './components/product/ProductsComponent';
import UserOrders from './components/userOrder/UserOrdersComponent';
import Orders from './components/order/OrdersComponent';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn'

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

                                <Header/>

                            </div>
                        </nav>
                        {" "}
                        <br/>
                        <h2>Welcome to Sysco LABS POS</h2> <br/>
                        <Switch>
                            <Route exact path="/signup" component={SignUp}/>
                            <Route exact path="/signin" component={SignIn}/>
                            <Route path='/orders/:userOrderId' component={Orders}/>
                            <Route path="/products" component={Products}/>
                            <Route path="/userOrders" component={UserOrders}/>
                        </Switch>
                    </div>
                </Provider>
            </Router>

        );
    }
}


export default App;
