import React from 'react';

import { Container } from './styles';
import store from "../../images/store.png";

const ContentIntro = () => {
  return (
      <Container>
            <img src={store} alt="store"/>
      </Container>
  );
}

export default ContentIntro;