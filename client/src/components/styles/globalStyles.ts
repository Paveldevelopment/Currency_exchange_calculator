import { createGlobalStyle } from 'styled-components';



const GlobalStyle = createGlobalStyle`
  body {
    padding-top: 50em;
    width: 100%;
    height: 100vh;
    overflow: hidden;
    background: teal;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }
  * {
    font-size: 5px;
    --text: 7em
  }
`;
 
export default GlobalStyle;