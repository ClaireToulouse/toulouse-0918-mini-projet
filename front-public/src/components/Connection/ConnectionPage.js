import React from 'react';
import { Container, Row } from 'reactstrap';
import SignupPage from './SignupPage';
import SigninPage from './SigninPage';
import ProfileEditor from './ProfileEditor';

const ConnectionPage = () => {
  <Container>
    <Row>
      <SigninPage />
      <SignupPage />
      <ProfileEditor />
    </Row>
  </Container>
}

export default ConnectionPage;