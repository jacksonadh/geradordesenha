import { createGlobalStyle } from "styled-components";

const ResetCSS = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Oxygen:wght@400;700&display=swap');
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body {
  font-family: 'Oxygen', sans-serif;
  background: #fff;
}

button, input {
  outline: none;
}
`;

export { ResetCSS };