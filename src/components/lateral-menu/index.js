import React, { useState } from 'react';
import { FaPlusCircle, FaUsers } from 'react-icons/fa';

import { Wrapper } from './styles';

const LateralMenu = () => {

  const [families] = useState([
    {
      id: 1,
      name: `Viegas`
    },
    {
      id: 2,
      name: `Uci & Bin`
    },
    {
      id: 3,
      name: `Rodeena`
    },
    {
      id: 4,
      name: `Jhon's family`
    }
  ]);

  return (
    <Wrapper>
        <div className="new-family">
            <FaPlusCircle />
            <span>
              New family              
            </span> 
          </div>
          <ul>
            { families && families.map((item) => (
                <li key={item.id}>
                  <FaUsers className="user-icons"/>
                  <span> {item.name} </span>
                </li>
            ))}
          </ul>
    </Wrapper>
  );
}

export default LateralMenu;