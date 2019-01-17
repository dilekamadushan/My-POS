import React, {Component} from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";


import 'bootstrap/dist/css/bootstrap.min.css';
import {  Link } from 'react-router-dom';


import {getToken} from '../actions/userActions';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';


class Header extends Component {

    componentDidMount() {
        this.props.getToken()
    }

    navbarLinks() {
     const   {loggedIn} = this.props.user;
     console.log('Inside Header '+loggedIn)
        if (loggedIn) {
            return [
                <ul>
                    <li className="nav-item">
                        <Link to={"/products"} className="nav-link">
                            Products
                        </Link>

                    </li>
                    <li className="nav-item">
                        <Link to={"/userOrders"} className="nav-link">
                            User Orders
                        </Link>

                    </li>
                </ul>
            ];
        }
        return [
            <ul>
            </ul>
        ];
    }


    render() {
        return (
           this.navbarLinks()
        );
    }
}

Header.propTypes = {
    getToken: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    user: state.user
});
export default connect(mapStateToProps, {getToken})(Header);