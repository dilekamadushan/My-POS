import React, {Component} from "react";
import {Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Container, ListGroup} from "reactstrap";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {connect} from 'react-redux';
import {getProducts} from '../../actions/productActions';
import {addOrder} from '../../actions/orderActions';
import {getUserOrderID} from "../../actions/userOrderActions";
import PropTypes from 'prop-types';

class ProductListForOrder extends Component {

    componentDidMount() {
        this.props.getUserOrderID();
        this.props.getProducts();
        const {userOrderId} = this.props.userOrder;
        console.log('creating order' + userOrderId);
    }

    onClickAddOrder = (id) => {

        const {userOrderId} = this.props.userOrder;
        console.log('creating order' + userOrderId);

        const newOrder = {
            productId: id,
            userOrderId: userOrderId,
            quantity: 1
        };
        this.props.addOrder(newOrder)

    };


    render() {
        const {products} = this.props.product;
        return (
            <Container>
                <ListGroup>
                    <TransitionGroup>
                        {products.map(({_id, name}) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                {

                                    <div>
                                        <Card>
                                            <CardImg top width="100%"
                                                     src="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?cs=srgb&dl=burger-chips-dinner-70497.jpg&fm=jpg"
                                                     alt="Card image cap"/>
                                            <CardBody>
                                                <CardTitle>{name}</CardTitle>
                                                <CardSubtitle>Card subtitle</CardSubtitle>
                                                <CardText>Some quick example text to build on the card title and make up
                                                    the bulk of the card's content.</CardText>
                                                <Button className="badge-primary"
                                                        onClick={this.onClickAddOrder.bind(this, _id)}>Add to
                                                    Order</Button>
                                            </CardBody>
                                        </Card>
                                    </div>

                                }


                            </CSSTransition>
                        ))}
                    </TransitionGroup>
                </ListGroup>
            </Container>
        );
    }
}

ProductListForOrder.propTypes = {
    getProducts: PropTypes.func.isRequired,
    product: PropTypes.object.isRequired,
    addOrder: PropTypes.func.isRequired,
    getUserOrderID: PropTypes.func.isRequired
};
const mapStateToProps = (state) => ({
    product: state.product,
    order: state.order,
    userOrder: state.userOrder
});
export default connect(mapStateToProps, {getProducts, addOrder, getUserOrderID})(ProductListForOrder);