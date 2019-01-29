import React, {Component} from "react";
import {Alert, Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader} from "reactstrap";
import {getProductId, setProductModalForOrder} from "../../actions/productActions";
import {addOrder} from '../../actions/orderActions';
import {getUserOrderID} from "../../actions/userOrderActions";

import {connect} from "react-redux";

class ProductModalForOrder extends Component {
    state = {
        quantity: 1
    };

    componentDidMount() {
        this.props.getProductId();
    }


    toggle = () => {
        this.props.setProductModalForOrder(false);
    };

    returnBooleanForModal = () => {
        const {productModalForOrder} = this.props.product;
        return productModalForOrder;
    };

    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    onSubmit = e => {
        e.preventDefault();

        const {productId} = this.props.product;

        const newOrder = {
            productId: productId,
            userOrderId: this.props.userOrderId,
            quantity: this.state.quantity
        };
        this.props.addOrder(newOrder);

        //Close the modal
        this.toggle();
    };

    render() {

        return (
            <div>

                <Modal isOpen={this.returnBooleanForModal()} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add To Cart</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Alert color="danger">
                                    Maximum quantity is 100!!!
                                </Alert>
                                <Label for="quantity">Quantity</Label>
                                <Input
                                    type="number"
                                    name="quantity"
                                    id="quantity"
                                    placeholder="Add Quantity"
                                    onChange={this.onChange}
                                />

                                <Button color="dark" style={{marginTop: "2rem"}} block>
                                    Add Quantity
                                </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    product: state.product,
    userOrder: state.userOrder
});
export default connect(
    mapStateToProps,
    {setProductModalForOrder, addOrder, getUserOrderID, getProductId}
)(ProductModalForOrder);
