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
