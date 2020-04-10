import styled from 'styled-components';

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
                padding: 14px 15px;

                &:last-child {
                    text-align: center;
                }
            }
        }
    }
`;
