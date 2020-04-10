import styled, { keyframes } from 'styled-components';

const visible = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const Actions = styled.td`
    position: relative;
    color: #c6c6c6;

    button {
        font-size: 20px;
        background: none;
        border: none;
    }

    &:hover ul {
        display: block;
        animation: ${visible} 0.2s linear;
    }
`;

export const ActionsList = styled.ul`
    position: absolute;
    z-index: 1;
    display: none;
    min-width: 150px;
    width: fit-content;
    top: calc(100% - 10px);
    left: calc(50% - 75px);
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 5px 5px 5px -5px #999;
    background: white;
    color: #999;

    &::before {
        content: '';
        position: absolute;
        height: 0;
        width: 0;
        top: -6px;
        left: calc(50% - 4px);

        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-bottom: 6px solid #ddd;
    }

    li {
        display: flex;
        align-items: center;
        white-space: nowrap;

        width: 100%;
        padding: 10px 0;

        svg {
            margin-right: 10px;
        }

        button {
            color: #999999;
            font-size: 16px;
        }
    }

    li + li {
        border-top: 1px solid #eee;
    }
`;
