import React, {Component} from "react";
import {Alert, Button, Card, CardBody, CardImg, Col, Container, ListGroup, Row} from "reactstrap";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import ProductModalForOrder from "./ProductModalForOrder"
import {getProducts, setProductId} from '../../actions/productActions';
import {addOrder} from '../../actions/orderActions';
import {getUserOrderID} from "../../actions/userOrderActions";

import {connect} from 'react-redux';
import PropTypes from 'prop-types'

class ProductListForOrder extends Component {

    componentDidMount() {
        this.props.getUserOrderID();
        this.props.getProducts();
    }

    onClickSetProductIdAndTriggerModal = (id) => {


        this.props.setProductId(id);

    };


    render() {
        const {products} = this.props.product;
        return (
            <Container>
                <ListGroup>
                    <TransitionGroup>
                        {products.map(({_id, name, price, imageURL}) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                {
                                    <Row>
                                        <Col sm="12" md={{size: 6, offset: 3}}>
                                            <div className="m-2">

                                                {/* <div className="m-lg-5">*/}
                                                <Card>
                                                    <CardImg top width="100"
                                                             src={imageURL}
                                                             alt="Card image cap"/>
                                                    <CardBody>


                                                        <Row>
                                                            <Col sm="12" md={{size: 6, offset: 3}}> <Alert
                                                                color="primary">
                                                                {name}
                                                            </Alert></Col>
                                                            <Col sm="12" md={{size: 6, offset: 3}}> <Alert
                                                                color="warning">
                                                                {price} $
                                                            </Alert></Col>

                                                        </Row>

                                                        <Button
                                                            className="badge-primary"
                                                            color="dark"
                                                            style={{marginBottom: "2rem"}}
                                                            onClick={this.onClickSetProductIdAndTriggerModal.bind(this, _id)}
                                                        >
                                                            Add to Cart
                                                        </Button>
                                                        <ProductModalForOrder userOrderId={this.props.userOrderId}/>
                                                    </CardBody>
                                                </Card>
                                            </div>
                                        </Col>

                                    </Row>
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