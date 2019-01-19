import React, {Component} from "react";
import {Button, Container, ListGroup, ListGroupItem} from "reactstrap";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {connect} from 'react-redux';
import {deleteOrder, getOrders} from '../../actions/orderActions';
import {getUserOrderID, getUserOrderName} from '../../actions/userOrderActions';
import OrderTitle from "./OrderTitle";
import PropTypes from 'prop-types';

class OrderList extends Component {

    componentDidMount() {

        this.props.getUserOrderID();
        this.props.getUserOrderName();
        const {userOrderId} = this.props.userOrder;
        console.log('in order list component' + userOrderId);
        this.props.getOrders(userOrderId);
    }

    onDeleteClick = (id) => {
        this.props.deleteOrder(id)

    };

    calculatePrice = () => {
        const {orders} = this.props.order;
        let sum = 0;
        orders.forEach(obj => {
            sum += (obj.product.price * obj.quantity);
        });
        return sum;
    };

    render() {
        const {orders} = this.props.order;
        const {userOrderName} = this.props.userOrder;
        return (
            <Container>
                <h2>{userOrderName} <span className="second-word-formatting">{this.calculatePrice()}</span></h2>
                <OrderTitle/>
                <ListGroup>
                    <TransitionGroup>
                        {orders.map(({_id, quantity, product}) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem>
                                    <Button
                                        className="remove-btn"
                                        color="danger"
                                        size="sm"
                                        onClick={this.onDeleteClick.bind(this, _id)}
                                    >
                                        &times;
                                    </Button>
                                    <h3> {product.name} </h3><span
                                    className="second-word-formatting"><h5><b>{quantity}</b></h5></span>
                                </ListGroupItem>
                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

OrderList.propTypes = {
    getOrders: PropTypes.func.isRequired,
    order: PropTypes.object.isRequired,
    userOrder: PropTypes.object.isRequired,
    getUserOrderID: PropTypes.func.isRequired,
    getUserOrderName: PropTypes.func.isRequired
};
const mapStateToProps = (state) => ({
    order: state.order,
    userOrder: state.userOrder
});
export default connect(mapStateToProps, {getOrders, deleteOrder, getUserOrderID, getUserOrderName})(OrderList);