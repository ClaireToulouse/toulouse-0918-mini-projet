import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import { addUser } from '../../actions';

class SignupPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
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
    const { email, password } = this.state;
    axios.post('/auth/signup', { email, password })
    .then(response => response.data)
    .then(user => {
      addUser(user);
      this.setState({
        email: "", password: ""
      })
    });
  };

  render() {
    const { email, password } = this.state;
    return(
      <Container>
        <Row className="my-3">
          <Form 
            style={{ width: "100%"}}
            onSubmit={this.handleSubmit}
          >
            <h3 className="my-3">Créer votre compte utilisateur</h3>
            <Row>
              <Col md="3">
                <Label for="email">Email :</Label>
              </Col>
              <Col>
                <Input
                  type="email" name="email" id="email" placeholder="email"
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
                  type="password" name="password" id="password" placeholder="password"
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
                type="password" name="passwordBis" id="passwordBis" placeholder="mot de passe"
              />
              </Col>
            </Row>
            <Button type="submit">Envoyer</Button>
          </Form>
        </Row>

        <Row className="my-3">
          <Form style={{ width: "100%"}}>
            <h3 className="my-3">Complétez votre profil</h3>
            <FormGroup>
              <Label for="firstName">Prénom</Label>
              <Input type="text" name="firstName" id="firstName" placeholder="Prénom" />
            </FormGroup>
            <FormGroup>
            <Label for="lastName">Nom</Label>
              <Input type="text" name="lastName" id="lastName" placeholder="Nom" />
            </FormGroup>
            <FormGroup>
            <Label for="address">Adresse</Label>
              <Input type="text" name="address" id="address" placeholder="Adresse" />
            </FormGroup>
            <Button>Envoyer</Button>
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
