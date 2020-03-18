import styled, { css, keyframes } from 'styled-components';

const visible = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const Table = styled.table`
    width: 100%;
    margin-top: 20px;
    font-size: 16px;
    border-collapse: separate;
    border-spacing: 0 20px;

    th {
        text-align: left;
        padding: 0 15px;

        &:last-child {
            text-align: center;
        }
    }

    tbody {
        color: #666666;

        tr {
            background-color: #fff;
            border-radius: 4px;

            td {
                padding: 20px 15px;

                &:last-child {
                    text-align: center;
                }
            }
        }
    }
`;

export const Actions = styled.td`
    position: relative;

    button {
        border: none;
        background: none;

        color: #c6c6c6;
        font-size: 20px;
    }
`;

export const ActionsList = styled.ul`
    position: absolute;
    display: none;
    width: 150px;
    top: calc(100% - 10px);
    left: calc(50% - 75px);
    padding: 15px;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 5px 5px 5px -5px #999;
    background: white;
    color: #999;

    ${props =>
        props.visible &&
        css`
            display: block;
            animation: ${visible} 0.2s linear alternate;
        `}

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

        width: 100%;
        padding: 10px 0;

        svg {
            margin-right: 10px;
        }
    }

    li:nth-child(1) {
        border-bottom: 1px solid #eee;
    }
`;
