import styled from "styled-components";

export const Wrapper = styled.div`
    position: absolute;
    z-index: 1;
    padding: 12px 20px;
    display: ${props => props.display};
    margin-top: ${props => props.mt + "vh" };
    background: var(--white);
    border: 1px solid var(--grey);
    border-radius: 3px;
    ul > li {
        color: var(--black);
        list-style-type: none;
        padding: 10px;

        svg {
            vertical-align: middle;
            margin-right: 5px;
        }
    }
`;
