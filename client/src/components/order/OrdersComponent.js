import React, {Component} from "react";
import OrderList from "./OrderList";
import {Alert, Container} from "reactstrap";
import ProductListForOrder from "./ProductListForOrder";
import {connect} from "react-redux";
import {getToken, signOut} from "../../actions/userActions";
import PropTypes from 'prop-types'

class OrdersComponent extends Component {
    componentDidMount() {
        this.props.getToken();
    }

    render() {
        const {isLogged} = this.props.user;
        if (!isLogged) {
            console.log('here in userorders act' + isLogged);
            this.props.history.push('/')
        }
        return (
            <div className="App">
                <Container>
                    <div className="m-4">
                        <Alert color="success">
                            Manage Your Cart Here!
                        </Alert>
                    </div>
                    <OrderList/>
                    <div>
                        <Container>
                            <div className="m-4">
                                <Alert color="primary">
                                    Add more products!
                                </Alert>
                            </div>
                            <ProductListForOrder/>
                        </Container>
                    </div>


                </Container>
            </div>
        );
    }
}

OrdersComponent.propTypes = {
    getToken: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    signOut: PropTypes.func.isRequired
};
const mapStateToProps = (state) => ({
    user: state.user
});
export default connect(mapStateToProps, {getToken, signOut})(OrdersComponent);

