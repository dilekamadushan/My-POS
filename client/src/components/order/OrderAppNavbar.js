import React, { Component } from "react";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Container
} from "reactstrap";

class OrderAppNavbar extends Component {
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
                        <NavbarBrand href="/">Order List</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }
}

export default OrderAppNavbar;
