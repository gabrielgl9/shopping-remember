import React, { useState } from 'react';
import { FaQuestionCircle, FaRegIdBadge, FaSignOutAlt } from "react-icons/fa";
import avatar from "../../images/avatar.png";
import store from "../../images/store.png";
import Dropdown from '../dropdown';
import { Wrapper } from './styles';


const HorizontalMenu = () => {

  const [active, setActive] = useState("none");

  return (
    <Wrapper>
      <div className="content-logo">
        <img src={store} alt="store"/>
      </div>
      <div className="content-infos">
        <div className="show-items" onClick={() => setActive('block')} onMouseLeave={() => setActive('none')}>
            <img src={avatar} alt="avatar"/>
            <Dropdown mt={7} display={active}>
              <ul>
                <li> 
                  <FaRegIdBadge />
                  <span> My Profile </span> 
                </li>
                <li> 
                  <FaSignOutAlt />
                  <span> Logout </span>  
                </li>
              </ul>
            </Dropdown>            
        </div>

        <FaQuestionCircle className="helpIcon"/>
      </div>
    </Wrapper>
  );
}

export default HorizontalMenu;