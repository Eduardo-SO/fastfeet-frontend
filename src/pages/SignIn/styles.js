import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
    width: 360px;
    padding: 60px 30px;
    border-radius: 4px;
    background: #fff;

    display: flex;
    flex-direction: column;

    img {
        height: 50px;
        width: min-content;
        align-self: center;
    }

    form {
        display: flex;
        flex-direction: column;

        margin-top: 30px;

        span {
            font-weight: bold;
            margin: 15px 0 10px 0;
        }

        input {
            height: 45px;
            padding: 0 15px;
            border: 1px solid #dddddd;
            border-radius: 4px;

            font-size: 16px;
        }

        button {
            height: 45px;
            margin-top: 15px;
            padding: 0 40px;
            border-radius: 4px;
            border: none;

            font-size: 16px;
            font-weight: bold;
            color: #fff;
            background-color: #7d40e7;

            transition: 0.3s;

            &:hover {
                background-color: ${darken(0.04, '#7d40e7')};
            }
        }
    }
`;
