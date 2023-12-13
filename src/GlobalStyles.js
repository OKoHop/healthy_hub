import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
ul {
    padding: 0;
    margin: 0;
    list-style: none;
};

img {
    display: block;
    max-width: 100%;
    height: auto;
}

h1, h2, h3, h4, h5, h5, p {
    padding: 0;
    margin: 0;
}

a {
    text-decoration: none;
}

button {
    cursor: pointer;
}
`;
