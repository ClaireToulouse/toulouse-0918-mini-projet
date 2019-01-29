import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, Label, Input } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { selectUser } from '../../actions';

class SigninPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
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
    const { selectUser } = this.props;
    const { email, password } = this.state;
    axios.post('/auth/signin', { email, password })
    .then(response => response.data)
    .then(data => {
      const { token } = data;
      const decoded = jwtDecode(token);
      selectUser(decoded);
      alert('Vous êtes bien connecté à votre espace client');
      this.setState({
        email: "", password: ""
      })
    })
    .catch (err => {
      return alert('Erreur d\'identification, veuillez réessayer.')
    });
  };

  render() {
    const { email, password } = this.state;
    return(
      <Row className="my-3">
        <Form 
          onSubmit={this.handleSubmit}
        >
          <h3 className="my-3">Connectez-vous à votre compte utilisateur</h3>
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
          <Button type="submit">Envoyer</Button>
        </Form>
      </Row>
    )
  };
};

const mapDispatchToProps = dispatch => ({
  selectUser: (email, password) => dispatch(selectUser(email, password))
});

export default connect(null, mapDispatchToProps)(SigninPage);
