import React, { Component } from 'react';
import AppNavbar from "../AppNavbar";
import ProductList from "./ProductList";
import ProductModal from "./ProductModal";
import { Container } from "reactstrap";

export default class Products extends Component {

 
    render() {
      return (
        <div className="App">
          <AppNavbar />
          <Container>

         
         <ProductModal/>
          <ProductList/>
          </Container>
        </div>
      );
    }
  }