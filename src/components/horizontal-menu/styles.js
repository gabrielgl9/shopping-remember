import styled from "styled-components"

export const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    
    background: var(--green);
    height: 10vh;
    width: 100%;
    
    display: flex;
    align-items: center;

    .content-logo {
        display: flex;
        align-items: normal;
        justify-content: start;

        position: relative;
        height: 10vh;
        width: 10%;
        padding: 10px; 
    }
    
    .content-infos {
        display: flex;
        align-items: normal;
        justify-content: flex-end;

        position: relative;
        height: 10vh;
        width: 100%;
        padding: 10px;   

        .show-items {
            display: flex;
            justify-content: inherit;
            align-items: inherit;
        }
        
        .helpIcon {
            margin: 0 10px;
            height: 100%;
            font-size: -webkit-xxx-large;
            color: var(--white);
        }

        img, .helpIcon {
            cursor: pointer;
        }
    }
`;

