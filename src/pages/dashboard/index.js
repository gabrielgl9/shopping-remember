import React from 'react';
import { LateralMenu, HorizontalMenu } from '../../components';
import usher from "../../images/usher.png";
import { Container, Content } from '../../styles/helpers';

const Dashboard = () => {

  return (
      <Container flexStart backgroundGrey>
        <HorizontalMenu />
        <LateralMenu />
        <Content>
          <img src={usher} alt="welcome"/>
        </Content>
      </Container>
  );
}

export default Dashboard;