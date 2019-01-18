import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Alert, Button, Col, Container, Form, FormGroup, Input, Label} from "reactstrap";

import {connect} from "react-redux";
import {getAuthError, getToken, signin} from "../actions/userActions";

class SignIn extends Component {
    state = {
        email: "",
        password: ""
    };

    componentDidMount() {
        this.props.getAuthError();
        const {loggedIn} = this.props.user;
        console.log('Inside Sign in did' + loggedIn);
        if (loggedIn) {
            this.props.history.push('/userOrders');
        }


    }

    errorMessage() {
        const {auth_error} = this.props.user;
        if (auth_error) {
            console.log(auth_error);
            return (
                <Alert color="danger">
                    Credentials Invalid, Please try again
                </Alert>
            );

        } else {
            return (

                <Alert color="success">
                    Please Enter Credentials to Continue
                </Alert>
            )
        }
    }

    onChange = e => {
        this.setState({[e.target.name]: e.target.value});
    };

    onSubmit = e => {
        e.preventDefault();

        const newUser = {
            email: this.state.email,
            password: this.state.password
        };
        //Add User
        this.props.signin(newUser);
        const {loggedIn} = this.props.user;
        console.log('Inside Sign in ' + loggedIn);
        if (loggedIn) {
            this.props.history.push('/userOrders');
        }
    };

    render() {
        const {loggedIn} = this.props.user;
        if (loggedIn) {
            this.props.history.push('/userOrders')
        }
        return (

            <Container className="App">

                <h2>Sign In</h2>
                <Form className="form" onSubmit={this.onSubmit}>
                    <Col>
                        <FormGroup>
                            <Label>Email</Label>

                            <Col sm="12" md={{size: 6, offset: 3}}> <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="myemail@email.com"
                                onChange={this.onChange}

                            /></Col>
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Col sm="12" md={{size: 6, offset: 3}}> <Input
                                type="password"
                                name="password"
                                id="examplePassword"
                                placeholder="********"
                                onChange={this.onChange}
                            />
                            </Col>
                        </FormGroup>
                    </Col>
                    <Button>Submit</Button>
                </Form>
                {this.errorMessage()}
            </Container>
        );

    }
}

const mapStateToProps = state => ({
    user: state.user
});
export default connect(
    mapStateToProps,
    {signin, getToken, getAuthError}
)(SignIn);
