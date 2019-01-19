import React, {Component} from "react";
import {Collapse, Container, Navbar, NavbarBrand, NavbarToggler} from "reactstrap";

class OrderTitle extends Component {
    state = {
        isOpen: false
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        return(
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">Item List</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default OrderTitle;
