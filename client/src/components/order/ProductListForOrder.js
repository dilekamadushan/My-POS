import React, {Component} from "react";
import {Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Container, ListGroup} from "reactstrap";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {connect} from 'react-redux';
import {getProducts, setProductId} from '../../actions/productActions';
import {addOrder} from '../../actions/orderActions';
import {getUserOrderID} from "../../actions/userOrderActions";
import PropTypes from 'prop-types'
import ProductModalForOrder from "./ProductModalForOrder"

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
        this.props.addOrder(newOrder);
        this.setState({modal: !this.state.modal});

    };

    onClickSetProductIdAndTriggerModal = (id) => {


        this.props.setProductId(id);

    };


    render() {
        const {products} = this.props.product;
        console.log(products[0]);
        return (
            <Container>
                <ListGroup>
                    <TransitionGroup>
                        {products.map(({_id, name, imageURL}) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                {

                                    <div>
                                        <Card>
                                            <CardImg top width="100%"
                                                     src={imageURL}
                                                     alt="Card image cap"/>
                                            <CardBody>
                                                <CardTitle>{name}</CardTitle>
                                                <CardSubtitle>Card subtitle</CardSubtitle>
                                                <CardText>Some quick example text to build on the card title and make up
                                                    the bulk of the card's content.</CardText>
                                                {/* <Button className="badge-primary"
                                                        onClick={this.onClickAddOrder.bind(this, _id)}>Add to
                                                    Order</Button>*/}
                                                <Button
                                                    className="badge-primary"
                                                    color="dark"
                                                    style={{marginBottom: "2rem"}}
                                                    onClick={this.onClickSetProductIdAndTriggerModal.bind(this, _id)}
                                                >
                                                    Add to Order List
                                                </Button>
                                                <ProductModalForOrder/>
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
    getUserOrderID: PropTypes.func.isRequired,
    setProductId: PropTypes.func.isRequired
};
const mapStateToProps = (state) => ({
    product: state.product,
    order: state.order,
    userOrder: state.userOrder
});
export default connect(mapStateToProps, {getProducts, addOrder, getUserOrderID, setProductId})(ProductListForOrder);