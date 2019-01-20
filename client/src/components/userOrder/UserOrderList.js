import React, {Component} from "react";
import {Button, Container, ListGroup, ListGroupItem} from "reactstrap";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {connect} from "react-redux";
import {deleteUserOrder, getUserOrders, setUserOrderID, setUserOrderInfo} from "../../actions/userOrderActions";
import PropTypes from "prop-types";
import {Link} from "react-router-dom";

class UserOrderList extends Component {

    componentDidMount() {
        this.props.getUserOrders();
    }

    onDeleteClick = id => {
        this.props.deleteUserOrder(id);
    };

    onClickSetUserOrderDetails = value => {
        console.log(value);
        this.props.setUserOrderInfo(value);
    };


    render() {
        const {userOrders} = this.props.userOrder;
        return (
            <Container>
                <ListGroup>
                    <TransitionGroup>
                        {userOrders.map(({_id, name, createdDate}) => (
                            <CSSTransition key={_id} timeout={500} classNames="fade">
                                <ListGroupItem className="m-2">
                                    <Link to={"/orders/" + _id}>
                                        <Button
                                            className="btn btn-primary"
                                            color="primary"
                                            size="md"
                                            onClick={this.onClickSetUserOrderDetails.bind(this, _id + ' ' + name)}
                                        >
                                            Edit
                                        </Button>
                                    </Link>

                                    <Button
                                        className="remove-btn m-2"
                                        color="danger"
                                        size="sm"
                                        onClick={this.onDeleteClick.bind(this, _id)}
                                    >
                                        &times;
                                    </Button>
                                    <span className="second-word-formatting m-2"><h3>{name}</h3></span>

                                    <span
                                        className="second-word-formatting m-2">{createdDate.toString().slice(0, 10)}</span>
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
    setUserOrderID: PropTypes.func.isRequired,
    setUserOrderInfo: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
    userOrder: state.userOrder
});
export default connect(
    mapStateToProps,
    {getUserOrders, deleteUserOrder, setUserOrderID, setUserOrderInfo}
)(UserOrderList);
