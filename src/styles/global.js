import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
}

*:focus {
    outline: 0;
}

#root, html, body {
    height: 100%;
}

body {
    -webkit-font-smoothing: antialiased !important;
}

body, input, button {
    font: 14px 'Roboto', sans-serif;
}

button {
    cursor: pointer;
}

input[type='submit'] {
    border: none;
    cursor: pointer;
}

a {
    color: #999999;
    text-decoration: none;
}

ul {
    list-style: none;
}
`;
