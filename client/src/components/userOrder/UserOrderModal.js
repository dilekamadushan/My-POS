import React, {Component} from "react";
import {Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader} from "reactstrap";
import {addUserOrder} from "../../actions/userOrderActions";

import {connect} from "react-redux";

class UserOrderModal extends Component {
    state = {
        modal: false,
        name: "",
        price: 0
    };

    toggle = () => {
        this.setState({modal: !this.state.modal});
    };

    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    onSubmit = e => {
        e.preventDefault();

        const newUserOrder = {
            name: this.state.name,
            price: this.state.price
        };
        //Add UserOrder via addUserOrder action
        this.props.addUserOrder(newUserOrder);

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
                    Add Cart
                </Button>

                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Add a cart</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label for="userOrder">Cart name</Label>

                                <Input
                                    type="text"
                                    name="name"
                                    id="userOrder"
                                    placeholder="Add Cart"
                                    onChange={this.onChange}
                                />

                                <Button color="dark" style={{marginTop: "2rem"}} block>
                                    Add Cart
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
    userOrder: state.userOrder
});
export default connect(
    mapStateToProps,
    {addUserOrder}
)(UserOrderModal);
