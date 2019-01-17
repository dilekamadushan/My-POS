import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from "reactstrap";

import { connect } from "react-redux";
import { addUserOrder } from "../../actions/userOrderActions";

class UserOrderModal extends Component {
  state = {
    modal: false,
    name: "",
    price:0
  };

  toggle = () => {
    this.setState({ modal: !this.state.modal });
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();

    const newUserOrder = {
      name: this.state.name,
      price:this.state.price
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
          style={{ marginBottom: "2rem" }}
          onClick={this.toggle}
        >
          Add UserOrder
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Add To UserOrders</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.onSubmit}>
              <FormGroup>
                <Label for="userOrder">UserOrder</Label>

                <Input
                  type="text"
                  name="name"
                  id="userOrder"
                  placeholder="Add shopping UserOrder"
                  onChange={this.onChange}
                />

                <Button color="dark" style={{ marginTop: "2rem" }} block>
                  Add UserOrder
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
  { addUserOrder }
)(UserOrderModal);
