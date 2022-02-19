/*@import url('https://fonts.googleapis.com/css2?family=Sora:wght@700&family=Source+Sans+Pro:wght@600&display=swap');

* {
  margin: 0;
  font-family: 'Sora', sans-serif;
  box-sizing: border-box;
}
*/

import styled from "styled-components";

const WrapperDiv = styled.div`

      display: flex;
      justify-content: center;
      flex-wrap: wrap; 
      
      .divSenha {
      width: 100%;
      margin: 20px 0;
    }

    input {
      width: 60px;
      margin: auto;
      padding: 18px 0;
      text-align: center;
      background-color: #C4C4C4;
      color: #000;
      border-style: none;
      border-radius: 10px;
      font-family: Sora;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      text-transform: uppercase;
      line-height: 23px;
      letter-spacing: 0em;
      margin-bottom: 20px;
      }

      /* Chrome, Safari, Edge, Opera */
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      /* Firefox */
      input[type=number] {
        -moz-appearance: textfield;
      }

    button { width: 247px;
      padding: 18px 0;
      text-align: center;
      background-color: #C4C4C4;
      color: #000;
      border-style: none;
      border-radius: 10px;
      font-family: Sora;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      text-transform: uppercase;
      line-height: 23px;
      letter-spacing: 0em;
      margin-bottom: 20px;

      :hover {
        width: 247px;
        padding: 18px 0;
        text-align: center;
        background-color: #1f446e;
        color: #fff;
        border-style: none;
        border-radius: 10px;
        font-family: Sora;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        text-transform: uppercase;
        line-height: 23px;
        letter-spacing: 0em;
        margin-bottom: 20px;
      }

      
    }
`;

export default WrapperDiv;
