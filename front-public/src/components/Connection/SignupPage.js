import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Container, Row } from 'reactstrap';

class SignupPage extends Component {
  render() {
    return(
      <Container>
        <Row className="my-3">
          <Form style={{ width: "100%"}}>
            <h3>Créer votre compte utilisateur</h3>
            <FormGroup>
              <Label for="exampleEmail">Indiquez votre email</Label>
              <Input type="email" name="email" id="exampleEmail" placeholder="email" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Indiquez votre mot de passe</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="mot de passe" />
            </FormGroup>
            <FormGroup>
              <Label for="examplePassword">Vérifiez votre mot de passe</Label>
              <Input type="password" name="password" id="examplePassword" placeholder="mot de passe" />
            </FormGroup>
            <Button>Envoyer</Button>
          </Form>
        </Row>
        <Row className="mt-3">
          <Form style={{ width: "100%"}}>
            <h3>Complétez votre profil</h3>
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

export default SignupPage;
