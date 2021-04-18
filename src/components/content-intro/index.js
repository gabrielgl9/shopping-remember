import React from 'react';

import { Container } from './styles';

import { Link } from "react-router-dom";

import store from "../../images/store.png";

const ContentIntro = () => {
  return (
      <Container>
          <Link to="/">
            <img src={store} alt="store"/>
          </Link>
      </Container>
  );
}

export default ContentIntro;