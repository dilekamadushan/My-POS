import React, {Component} from "react";
import {Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader} from "reactstrap";
import {addProduct} from "../../actions/productActions";

import {connect} from "react-redux";

class ProductModal extends Component {
    state = {
        modal: false,
        name: "",
        price: 0,
        imageURL: ''
    };

    toggle = () => {
        this.setState({modal: !this.state.modal});
    };

    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    onSubmit = e => {
        e.preventDefault();

        const newProduct = {
            name: this.state.name,
            price: this.state.price,
            imageURL: this.state.imageURL
        };
        //Add Product via addProduct action
        this.props.addProduct(newProduct);

        //Close the modal
        this.toggle();
    };

    render() {
        return (
            <div>
                <Button
                    color="dark"
                    style={{marginBottom: "2rem"}}
                    onClick={this.toggle}
                >
                    Add Product
                </Button>

                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add To Products</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="product">Product</Label>

                                <Input
                                    type="text"
                                    name="name"
                                    id="product"
                                    placeholder="Add shopping Product"
                                    onChange={this.onChange}
                                    required={true}
                                />

                                <Label for="price">Price</Label>

                                <Input
                                    type="number"
                                    name="price"
                                    id="price"
                                    placeholder="Add Price"
                                    onChange={this.onChange}
                                    required={true}
                                />

                                <Label for="image">Image</Label>

                                <Input
                                    type="text"
                                    name="imageURL"
                                    id="imageURL"
                                    placeholder="Add image URL"
                                    onChange={this.onChange}
                                    required={true}
                                />

                                <Button color="dark" style={{marginTop: "2rem"}} block>
                                    Add Product
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
    product: state.product
});
export default connect(
    mapStateToProps,
    {addProduct}
)(ProductModal);
