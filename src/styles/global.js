import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body {
    font-family: 'Arial', sans-serif;
    margin: 0;
    padding: 0;
    background: #f5f5f5;
    color: #333;
}

h1, h2 {
    color: #007bff;
}

button {
    background: #007bff;
    color: #fff
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    transition: background 0.3s;
    &hover {
        background: #0056b3;
    }
}
`;

export default GlobalStyle;