import React, {Component} from "react";
import {Button, Container, ListGroup, ListGroupItem} from "reactstrap";
import {CSSTransition, TransitionGroup} from "react-transition-group";
import {connect} from 'react-redux';
import {deleteProduct, getProducts} from '../../actions/productActions';
import PropTypes from 'prop-types';

class ProductList extends Component {

  componentDidMount(){
    this.props.getProducts();
  }

  onDeleteClick = (id)=>{
    this.props.deleteProduct(id)

  };

  render() {
    const { products } = this.props.product;
    return (
      <Container>
        <ListGroup>
          <TransitionGroup >
              {products.map(({_id, name, price}) => (
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

                    <span className="second-word-formatting m-2"><h3> {name} {price}$</h3></span>

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
};
const mapStateToProps = (state) => ({
  product: state.product
});
export default connect(mapStateToProps, {getProducts, deleteProduct}) (ProductList);