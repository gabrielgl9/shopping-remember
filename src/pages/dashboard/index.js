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
            {/* <div className="wrapper"> */}
              <img src={usher} alt="welcome"/>
            {/* </div> */}
        </Content>
      </Container>
  );
}

export default Dashboard;