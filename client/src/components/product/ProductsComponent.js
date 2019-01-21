import React, {Component} from 'react';
import {Container} from "reactstrap";
import ProductTitle from "./ProductTitle";
import ProductList from "./ProductList";
import ProductModal from "./ProductModal";
import {getToken, signOut} from "../../actions/userActions";

import {connect} from "react-redux";
import PropTypes from 'prop-types'

class Products extends Component {

    componentDidMount() {
        this.props.getToken();
    }


    render() {
        const {isLogged} = this.props.user;
        if (!isLogged) {
            this.props.history.push('/')
        }
        return (
            <div className="App">
                <ProductTitle/>
                <Container>
                    <ProductModal/>
                    <ProductList/>
                </Container>
            </div>
        );
    }
}

Products.propTypes = {
    getToken: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    signOut: PropTypes.func.isRequired
};
const mapStateToProps = (state) => ({
    user: state.user
});
export default connect(mapStateToProps, {getToken, signOut})(Products);