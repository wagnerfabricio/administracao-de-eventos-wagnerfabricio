import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
    margin: 0;
    padding: 0; 
    box-sizing: border-box;
    outline: 0;
}

:root {
    --cursive: 'Comforter', cursive;
}

body {

}

body, input, button, h1, h2, h3, h4 {

}

button {
    cursor: pointer;
}

a {
    text-decoration: none;
}
`;

export default GlobalStyle