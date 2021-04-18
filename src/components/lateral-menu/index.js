import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';

import { Wrapper } from './styles';

const LateralMenu = () => {

  const [families, setFamilies] = useState([
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
                  {item.name}
                </li>
            ))}
          </ul>
    </Wrapper>
  );
}

export default LateralMenu;