import React from 'react';
import { FaQuestionCircle } from "react-icons/fa";
import avatar from "../../images/avatar.png";
import store from "../../images/store.png";
import { Wrapper } from './styles';


const HorizontalMenu = () => {

  return (
    <Wrapper>
        <div className="content-logo">
            <img src={store} alt="avatar"/>
          </div>
          <div className="content-infos">
            <img src={avatar} alt="avatar"/>
            <FaQuestionCircle className="helpIcon"/>
          </div>
    </Wrapper>
  );
}

export default HorizontalMenu;