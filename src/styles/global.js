import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    html {
        font-size: 1.375em;
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 100%;
        color: #2f2f33; 
        
        line-height: 1.4;
        text-rendering: optimizeLegibility;
        --webkit-font-smoothing: antialiased;
    }

    html, body, #root {
        height: 100%;
    }
`;