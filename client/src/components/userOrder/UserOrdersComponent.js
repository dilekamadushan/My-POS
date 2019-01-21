import React, {Component} from 'react';
import {Container} from "reactstrap";
import UserOrderTitle from "./UserOrderTitle";
import UserOrderList from "./UserOrderList";
import UserOrderModal from "./UserOrderModal";
import {getToken, signOut} from "../../actions/userActions";

import {connect} from "react-redux";
import PropTypes from 'prop-types'

class UserOrdersComponent extends Component {

    componentDidMount() {
        this.props.getToken();
    }


    render() {
        const {isLogged} = this.props.user;
        if (!isLogged) {
            this.props.history.push('/')
        }
        return (
            <div className="App">
                <UserOrderTitle/>
                <Container>


                    <UserOrderModal/>
                    <UserOrderList/>
                </Container>
            </div>
        );
    }
}

UserOrdersComponent.propTypes = {
    getToken: PropTypes.func.isRequired,
    user: PropTypes.object.isRequired,
    signOut: PropTypes.func.isRequired
};
const mapStateToProps = (state) => ({
    user: state.user
});
export default connect(mapStateToProps, {getToken, signOut})(UserOrdersComponent);