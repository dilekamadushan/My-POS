import React, {Component} from 'react';
import ProductTitle from "./ProductTitle";
import ProductList from "./ProductList";
import ProductModal from "./ProductModal";
import {Container} from "reactstrap";

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
            console.log('here in userorders act' + isLogged);
            this.props.history.push('/signin')
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