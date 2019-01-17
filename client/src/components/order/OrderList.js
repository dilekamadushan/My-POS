import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {connect} from 'react-redux';
import {getOrders, deleteOrder} from '../../actions/orderActions';
import { getUserOrderID} from '../../actions/userOrderActions';
import PropTypes from 'prop-types';

class OrderList extends Component {

  componentDidMount(){

    this.props.getUserOrderID();
    const {userOrderId} = this.props.userOrder
    console.log('in order list component'+userOrderId)
    this.props.getOrders(userOrderId);
  }

  onDeleteClick = (id)=>{
    this.props.deleteOrder(id)

  }

  render() {
    const { orders } = this.props.order;
    const {userOrderId} = this.props.userOrder
    return (
      <Container>
        <h2>{userOrderId}</h2>
        <ListGroup>
          <TransitionGroup >
            {orders.map(({ _id, product }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this,_id)}
                  >
                   &times;
                  </Button>
                  {product.name}
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
  getUserOrderID:PropTypes.func.isRequired
}
const mapStateToProps = (state) => ({
  order: state.order,
  userOrder:state.userOrder
});
export default connect(mapStateToProps, {getOrders, deleteOrder, getUserOrderID}) (OrderList);