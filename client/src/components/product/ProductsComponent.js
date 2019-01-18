import React, {Component} from 'react';
import ProductTitle from "./ProductTitle";
import ProductList from "./ProductList";
import ProductModal from "./ProductModal";
import {Container} from "reactstrap";

export default class Products extends Component {


    render() {
        return (
            <div className="App">
                <ProductTitle/>
                <Container>
                    <ProductModal/>
                    <ProductList/>
                </Container>
            </div>
        );
    }
}