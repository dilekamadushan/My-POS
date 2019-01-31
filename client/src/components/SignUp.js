import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Alert, Button, Col, Container, Form, FormGroup, Input, Label,} from "reactstrap";

import {connect} from "react-redux";
import {signup} from "../actions/userActions";

class SignUp extends Component {
    state = {
        email: "",
        password: ""
    };

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
        this.props.signup(newUser);

    };

    errorMessage() {
        const {signUpError} = this.props.user;
        if (signUpError) {
            return (
                <Alert color="danger">
                    Please try again with a different mail address!!!
                </Alert>
            );

        } else {
            return (

                <Alert color="success">
                    Please Sign Up if you don't have an account already
                </Alert>

            )
        }
    }

    render() {
        return (
            <Container className="App">
                <h2><b>Sign Up</b></h2>
                <Form className="form m-2" onSubmit={this.onSubmit}>
                    <Col>
                        <FormGroup>
                            <Label>Email</Label>

                            <Col sm="12" md={{size: 6, offset: 3}}> <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="myemail@email.com"
                                onChange={this.onChange}
                                required={true}

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
                                required={true}
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
    {signup}
)(SignUp);
