import styled from 'styled-components';

export const FormGroup = styled.div`

    display: flex;
    flex-direction: column;

    label {
        font-size: 18px;
        color: var(--black);
        margin: 10px 0;
    }

    input {
        border: 1px solid var(--black);
        border-radius: 3px;
        padding: 10px;
        font-size: 18px;
    }
`;
