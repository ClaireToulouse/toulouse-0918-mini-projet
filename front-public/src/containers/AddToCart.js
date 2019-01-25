import React, { Component } from 'react';
import { Row, Col, Button} from 'reactstrap';
import { connect } from 'react-redux';
import { addToCart } from '../actions';

class AddToCart extends Component {
  constructor(props){
    super(props)
    this.state={
      count: 0
    }
    this.addOne=this.addOne.bind(this);
    this.removeOne=this.removeOne.bind(this);
  }

  addOne(){
    this.setState({
      count: this.state.count +1
    })
  }

  removeOne(){
    if (this.state.count >0){
      this.setState({
        count: this.state.count -1
      })
    }
  }

  render() {
    const { count } = this.state;
    const { addToCart } = this.props;
    const { id } = this.props.product;
    return(
      <div className="">
          <Row>
            <Col lg="6">
              <Button
                onClick={this.removeOne.bind(this)}
                style={{ color: 'black', backgroundColor: 'white' }}
              > - </Button>
              <h6 className="d-inline-block mx-3">{count}</h6>
              <Button
                onClick={this.addOne.bind(this)}
                style={{ color: 'black', backgroundColor: 'white' }}
              > + </Button>
            </Col>
            <Col lg="6">
              <Button
                onClick={
                  () => addToCart(count, id)
                }
                style={{ color: 'white', backgroundColor: 'green', border: 'none' }}
              >Ajouter au panier</Button>
            </Col>
          </Row>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addToCart: (count, id) => dispatch(addToCart(count, id))
})

export default connect(null, mapDispatchToProps)(AddToCart);