import styled from "styled-components"

export const Wrapper = styled.div`
    height: 100%;
    width: 20%;
    padding-top: 10vh;
    background: var(--dark-green);
    color: var(--white);

    .new-family {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        padding: 10px 0;
        background: var(--full-dark-green);
        span {
            margin-left: 10px;
        }   
    }
    
    ul > li {
        padding: 10px;
    }

    li > .user-icons {
        vertical-align: middle;
    }
`;