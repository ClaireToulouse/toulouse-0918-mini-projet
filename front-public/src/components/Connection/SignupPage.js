import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Label, Input } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import { addUser } from '../../actions';

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      passwordBis: "",
      firstname: "",
      lastname: "",
      address: ""
    }
    this.handleChange=this.handleChange.bind(this);
    this.handleSubmit=this.handleSubmit.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value 
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { addUser } = this.props;
    const { email, password, passwordBis } = this.state;
    if (password !== passwordBis) {
      alert("Attention les deux mots de passe ne coïncident pas");
    } else {
      axios.post('/auth/signup', { email, password })
      .then(response => response.data)
      .then(user => {
        addUser(user);
        this.setState({
          email: "", password: "", passwordBis: ""
        })
      });
    }
  };

  render() {
    const { email, password, passwordBis } = this.state;
    return(
      <Container>
        <Row className="my-3">
          <Form 
            // style={{ width: "100%"}}
            onSubmit={this.handleSubmit}
          >
            <h3 className="my-3">Créer votre compte utilisateur</h3>
            <Row>
              <Col md="3">
                <Label for="email">Email :</Label>
              </Col>
              <Col>
                <Input
                  type="email" name="email" id="email" placeholder="email" value={email}
                  onChange={this.handleChange}
                />
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <Label for="password">Mot de passe :</Label>
              </Col>
              <Col>
                <Input 
                  type="password" name="password" id="password" placeholder="mot de passe" value={password}
                  onChange={this.handleChange}
                />
              </Col>
            </Row>
            <Row>
              <Col md="3">
                <Label for="passwordBis">Mot de passe (bis) :</Label>
              </Col>
              <Col>
              <Input
                type="password" name="passwordBis" id="passwordBis" placeholder="vérification du mot de passe" value={passwordBis}
                onChange={this.handleChange}
              />
              </Col>
            </Row>
            <Button type="submit">Envoyer</Button>
          </Form>
        </Row>
      </Container>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  addUser: (email, password) => dispatch(addUser(email, password))
});

export default connect(null, mapDispatchToProps)(SignupPage);
