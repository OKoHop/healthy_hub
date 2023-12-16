import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`
body {
    background-color: #000000;
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
    color: #FFFFFF
}

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
    cursor: pointer;
}

button {
    cursor: pointer;
}

.Overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(5, 5, 5, 0.8);
    z-index: 1200;
    }

.container {
    width: 330px;
    padding-left: 15px;
    padding-right: 15px;
    margin-left: auto;
    margin-right: auto;

    @media (min-width: 810px) {
        width: 810px;
        padding-left: 15px;
        padding-right: 15px;
        margin-left: auto;
        margin-right: auto;
    }

    @media (min-width: 1402px) {
        width: 1402px;
        padding-left: 15px;
        padding-right: 15px;
        margin-left: auto;
        margin-right: auto;
    }
}
    
`;
