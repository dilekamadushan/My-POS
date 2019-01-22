import React, {Component} from 'react';
import {Container} from "reactstrap";
import UserOrderTitle from "./UserOrderTitle";
import UserOrderList from "./UserOrderList";
import UserOrderModal from "./UserOrderModal";
import {getToken, signOut} from "../../actions/userActions";

import {connect} from "react-redux";
import PropTypes from 'prop-types'
import Cookies from "universal-cookie/cjs";

class UserOrdersComponent extends Component {

    componentDidMount() {
        this.props.getToken();
    }


    render() {
        const cookies = new Cookies();
        let cookie = cookies.get('SyscoPOSCookie');
        if (cookie === undefined || cookie.toString().length < 15) {
            this.props.history.push('/signin')
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