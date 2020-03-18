import styled from 'styled-components';

export const Container = styled.div`
    max-width: 1250px;
    padding: 50px;
    margin: 0 auto;
`;

export const Header = styled.div`
    h1 {
        margin-bottom: 35px;
    }

    nav {
        display: flex;
        justify-content: space-between;

        button {
            height: 36px;
            border: none;
            border-radius: 4px;
            padding: 0 15px;

            background: #7d40e7;
            color: #fff;

            font-weight: bold;

            display: flex;
            align-items: center;
        }
    }
`;

export const InputContainer = styled.div`
    display: flex;
    align-items: center;
    width: 240px;
    padding-left: 16px;
    border: 1px solid #dddddd;
    border-radius: 4px;

    background: #fff;
    color: #999999;

    input {
        flex: 1;
        height: 100%;
        border: none;
        padding: 0 10px;
        background: none;

        &::placeholder {
            color: #999999;
        }
    }
`;
