import React, {Component} from 'react';
import UserOrderTitle from "./UserOrderTitle";
import UserOrderList from "./UserOrderList";
import UserOrderModal from "./UserOrderModal";
import {Container} from "reactstrap";

export default class UserOrders extends Component {

 
    render() {
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