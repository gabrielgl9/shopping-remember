
import React from 'react';

import { Wrapper } from "./styles"
const Dropdown = ({ children, display = "none", mt = 0 }) => {
    console.log(display);
    return (
        <Wrapper mt={mt} display={display}>
            {children}
        </Wrapper>
    );
}

export default Dropdown;