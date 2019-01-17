import React, { Component } from 'react';
import AppNavbar from "../AppNavbar";
import UserOrderList from "./UserOrderList";
import UserOrderModal from "./UserOrderModal";
import { Container } from "reactstrap";

export default class UserOrders extends Component {

 
    render() {
      return (
        <div className="App">
          <AppNavbar />
          <Container>

         
         <UserOrderModal/>
         <UserOrderList/>
          </Container>
        </div>
      );
    }
  }