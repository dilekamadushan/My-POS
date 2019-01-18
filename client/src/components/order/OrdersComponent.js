import React, {Component} from "react";
import OrderList from "./OrderList";
import {Container} from "reactstrap";
import OrderAppNavbar from "./OrderAppNavbar";
import ProductListForOrder from "./ProductListForOrder";

export default class Orders extends Component {
    render() {
        return (
            <div className="App">
                <OrderAppNavbar/>
                <Container>
                    <OrderList/>
                    <div>
                        <Container>
                            <ProductListForOrder/>
                        </Container>
                    </div>


                </Container>
            </div>
        );
    }
}
