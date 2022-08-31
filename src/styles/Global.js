import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
    * {
      padding: 0;
      margin: 0;
      border: 0;
    }

    a:focus,
    a:active {
      outline: none;
    }
    nav,
    footer,
    header,
    aside {
      display: block;
    }
    html,
    body {
      height: 100%;
      width: 100%;
      color: hsl(192, 100%, 9%);
      font-family: 'Poppins', sans-serif;
      font-size: 1.15em;
      margin: 0;
      font-size: 100%;
      line-height: 1;
      font-size: 14px;
      -ms-text-size-adjust: 100%;
      -moz-text-size-adjust: 100%;
      -webkit-text-size-adjust: 100%;
    }
    input,
    button,
    textarea {
      font-family: inherit;
    }
    ul li {
      list-style: none;
    }
    img {
      vertical-align: top;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      font-size: inherit;
      font-weight: inherit;
    }
`;

export default Global;
