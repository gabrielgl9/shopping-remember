import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
`;

export const ContentForm = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    min-height: 100%;
    width: 50%;
    background: #FFFFFF;

    form {
        width: 70%;
    }
`;

export const ContentIntro = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    min-height: 100%;
    width: 50%;
    background: #0a9992;
`;