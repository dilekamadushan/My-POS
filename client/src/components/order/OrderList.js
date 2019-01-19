import React, {Component} from "react";
import {Alert, Button, Card, CardBody, CardImg, Col, Container, ListGroup, ListGroupItem, Row} from "reactstrap";
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
                <Row>
                    <Col sm="12" md={{size: 6, offset: 3}}>
                        <div className="m-2">
                            <Card>
                                <CardImg top width="100%"
                                         src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3LHe55ghoH-uh-UDX8v1foeBf9PYVAh7Fu2SeSfaJvwkWYrH-BA"
                                         alt="Card image cap"/>
                                <CardBody>
                                    <Row>
                                        <Col sm="12" md={{size: 6, offset: 3}}> <Alert color="primary">
                                            {userOrderName}
                                        </Alert></Col>
                                        <Col sm="12" md={{size: 6, offset: 3}}> <Alert color="danger">
                                            <b>  {this.calculatePrice()} $</b>
                                        </Alert></Col>

                                    </Row>
                                </CardBody>
                            </Card>
                        </div>
                    </Col>

                </Row>
                <OrderTitle/>
                <ListGroup>
                    <TransitionGroup>
                        {orders.map(({_id, quantity, product}) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem className="m-2">
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