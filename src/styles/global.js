import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }

    #root {
        --green: #0a9992;
        --dark-green: #02615c;
        --full-dark-green: #013533;
        --black: #2f2f33;
        --white: #ffffff; 
        --blue: #4398ee;
        --grey: #ececec;
    }

    html {
        font-size: 1.375em;
    }

    body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 100%;
        color: var(--black); 
        
        line-height: 1.4;
        text-rendering: optimizeLegibility;
        --webkit-font-smoothing: antialiased;
    }

    html, body, #root {
        height: 100%;
    }

`;