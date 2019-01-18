import React, {Component} from "react";
import {Button, Container, ListGroup, ListGroupItem} from "reactstrap";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {connect} from "react-redux";
import {deleteUserOrder, getUserOrders, setUserOrderID} from "../../actions/userOrderActions";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

class UserOrderList extends Component {

  componentDidMount() {
    this.props.getUserOrders();
  }

  onDeleteClick = id => {
    this.props.deleteUserOrder(id);
  };

  onClickSetUserOrderID = id => {
    this.props.setUserOrderID(id);
  };

  onClickSetUserOrderName = name => {
    this.props.setUserOrderID(name);
  };

  render() {
    const { userOrders } = this.props.userOrder;
    return (
      <Container>
        <ListGroup>
          <TransitionGroup>
            {userOrders.map(({ _id, name }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Link to={"/orders/" + _id}>
                    <Button
                      className="btn btn-primary"
                      color="primary"
                      size="sm"
                      onClick={this.onClickSetUserOrderID.bind(this, _id)}
                    >
                      Edit
                    </Button>
                  </Link>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this, _id)}
                  >
                    &times;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

UserOrderList.propTypes = {
  getUserOrders: PropTypes.func.isRequired,
  userOrder: PropTypes.object.isRequired,
  setUserOrderID:PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  userOrder: state.userOrder
});
export default connect(
  mapStateToProps,
  { getUserOrders, deleteUserOrder ,setUserOrderID}
)(UserOrderList);
