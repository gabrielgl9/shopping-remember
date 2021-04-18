import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: ${props => props.flexStart ? "flex-start" : "center"};
    width: 100vw;
    height: 100vh;
    background: ${props => props.backgroundGrey ? "var(--grey)" : "var(--white)"}
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 90%;
    min-width: 80%;
    margin-top: 10vh;

    .wrapper {
        background: var(--white);
        border: 1px solid var(--white);
        border-radius: 3px;
        min-height: 80vh;
        width: 70vw;
        height: auto;
    }
`;

export const ContentForm = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    min-height: 100%;
    width: 50%;
    background: var(--white);

    form {
        width: 70%;
    }
`;
