import styled from 'styled-components';

export const Container = styled.div`
    div {
        padding: 10px 0;

        h3 {
            margin-bottom: 10px;
            font-size: 14px;
        }

        p {
            color: #666666;
            font-size: 16px;
            margin-bottom: 5px;
        }

        + div {
            border-top: 1px solid #eeeeee;
        }
    }
`;
