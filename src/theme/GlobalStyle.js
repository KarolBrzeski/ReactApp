import { createGlobalStyle } from 'styled-components';

const GlobalSyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:300,600&display=swap');

*, *::before, *::after {
    box-sizing: border-box;    
    -webkit-font-soomthing: antialiased;
    -moz-osx-font-soothing: grayscale;
}

html {
    /* Due to decreasing font size to 62.5% one 1rem is equal 10px now */
    font-size: 62.5%; 
}

body {
    /* 1.6rem = 16px */
    font-size: 1.6rem; 
    padding-left: 150px;
    font-family: "Montserrat", sans-serif;
}

`;

export default GlobalSyle;
