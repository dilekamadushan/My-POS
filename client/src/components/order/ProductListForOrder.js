import React, {Component} from "react";
import {
    Container, ListGroup, ListGroupItem, Button, Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Col
} from "reactstrap";
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
        console.log('creating order'+userOrderId);
    }

    onClickAddOrder = (id) => {

        const {userOrderId} = this.props.userOrder;
        console.log('creating order'+userOrderId);

        const newOrder = {
            productId: id,
            orderId:userOrderId,
            quantity:1,
            space:"e"
        };
        this.props.addOrder(newOrder)

    }


    render() {
        const {products} = this.props.product;
        return (
            <Container>
                <ListGroup>
                    <TransitionGroup>
                        {products.map(({_id, name}) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                {/* <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this,_id)}
                  >
                   &times;
                  </Button>
                  {name}
                </ListGroupItem>*/

                                    <div>
                                        <Card>
                                            <CardImg top width="100%"
                                                     src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
                                                     alt="Card image cap"/>
                                            <CardBody>
                                                <CardTitle>{name}</CardTitle>
                                                <CardSubtitle>Card subtitle</CardSubtitle>
                                                <CardText>Some quick example text to build on the card title and make up
                                                    the bulk of the card's content.</CardText>
                                                <Button  className="badge-primary"  onClick={this.onClickAddOrder.bind(this,_id)}>Add to Order</Button>
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
    addOrder:PropTypes.func.isRequired,
    getUserOrderID:PropTypes.func.isRequired
}
const mapStateToProps = (state) => ({
    product: state.product,
    order: state.order,
    userOrder:state.userOrder
});
export default connect(mapStateToProps, {getProducts, addOrder, getUserOrderID})(ProductListForOrder);