
import React from 'react';

import { ButtonStyled } from "./styles"
const Button = ({ value, type = "submit"}) => {
    return (
        <ButtonStyled 
            type={type}>
            {value}
        </ButtonStyled>
    );
}

export default Button;