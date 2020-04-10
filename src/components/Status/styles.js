import styled from 'styled-components';

export const Status = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;

    width: fit-content;

    color: ${props => props.primaryColor};
    background: ${props => props.secondaryColor};

    padding: 3px 10px;
    border-radius: 12px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 14px;

    svg {
        margin-right: 5px;
    }
`;
