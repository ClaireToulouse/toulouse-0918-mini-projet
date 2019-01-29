import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import { addUser } from '../../actions';

class ProfileEditor extends Component {
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
    );
  }
};

const mapDispatchToProps = dispatch => ({
  addUser: (email, password) => dispatch(addUser(email, password))
});

export default connect(null, mapDispatchToProps)(ProfileEditor);
