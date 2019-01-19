import React, {Component} from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";


import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';


import {getToken, signOut} from '../actions/userActions';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Button from "reactstrap/es/Button";


class Header extends Component {

    componentDidMount() {
        this.props.getToken()
    }

    signOut = () => {
        this.props.signOut();
    };

    navbarLinks() {
        const {isLogged} = this.props.user;
        console.log('Inside Header ' + isLogged);
        if (isLogged) {
            return [
                <ul className=" navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={"/products"} className="nav-link">
                            Products
                        </Link>

                    </li>
                    <li className="nav-item">
                        <Link to={"/userOrders"} className="nav-link">
                            Cart List
                        </Link>

                    </li>
                    {/* <li className="nav-item">
                        <Link to={"/signout"} className="nav-link">
                            Sign Out
                        </Link>

                    </li>*/}
                    <Button color="primary" className="" onClick={this.signOut}>Sign Out</Button>{' '}
                </ul>
            ];
        }
        return [
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
    user: PropTypes.object.isRequired,
    signOut: PropTypes.func.isRequired
};
const mapStateToProps = (state) => ({
    user: state.user
});
export default connect(mapStateToProps, {getToken, signOut})(Header);