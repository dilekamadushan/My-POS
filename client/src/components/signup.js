import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from "reactstrap";

import {connect} from "react-redux";
import {signup} from "../actions/userActions";

class Signup extends Component {
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

    render() {
        return (
            <Container className="App">
                <h2>Sign Up</h2>
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
)(Signup);
