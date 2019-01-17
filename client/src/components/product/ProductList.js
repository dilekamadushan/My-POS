import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import {connect} from 'react-redux';
import {getProducts, deleteProduct} from '../../actions/productActions';
import PropTypes from 'prop-types';

class ProductList extends Component {

  componentDidMount(){
    this.props.getProducts();
  }

  onDeleteClick = (id)=>{
    this.props.deleteProduct(id)

  }

  render() {
    const { products } = this.props.product;
    return (
      <Container>
        <ListGroup>
          <TransitionGroup >
            {products.map(({ _id, name }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={this.onDeleteClick.bind(this,_id)}
                  >
                   &times;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}

ProductList.propTypes = {
  getProducts: PropTypes.func.isRequired,
  product: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
  product: state.product
});
export default connect(mapStateToProps, {getProducts, deleteProduct}) (ProductList);