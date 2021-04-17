
import React from 'react';

import { ButtonStyled } from "./style"
const Button = ({ value, type = "submit"}) => {
    return (
        <ButtonStyled 
            type={type}>
            {value}
        </ButtonStyled>
    );
}

export default Button;