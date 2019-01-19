import React, {Component} from "react";
import OrderList from "./OrderList";
import {Alert, Container} from "reactstrap";
import ProductListForOrder from "./ProductListForOrder";

export default class Orders extends Component {
    render() {
        return (
            <div className="App">
                <Container>
                    <OrderList/>
                    <div>
                        <Container>
                            <div className="m-4">
                                <Alert color="primary">
                                    Add more products!
                                </Alert>
                            </div>
                            <ProductListForOrder/>
                        </Container>
                    </div>


                </Container>
            </div>
        );
    }
}

