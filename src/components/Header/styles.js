import styled from 'styled-components';

export const Container = styled.div`
    height: 64px;
    padding: 0 30px;
    border-bottom: 1px solid #dddddd;
    background-color: #fff;

    display: flex;
    flex-direction: row;
    align-items: center;

    img {
        height: 36px;
    }

    nav {
        flex: 1;
        height: 36px;

        padding-left: 30px;
        margin-left: 30px;
        border-left: 1px solid #dddddd;

        display: flex;
        align-items: center;

        a {
            margin-right: 21px;

            font-size: 15px;
            font-weight: bold;

            color: #999;
        }
    }

    #user {
        display: flex;
        flex-direction: column;
        align-items: flex-end;

        strong {
            margin-bottom: 5px;
        }

        a {
            color: #de3b3b;
        }
    }
`;
