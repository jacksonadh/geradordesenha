import styled from "styled-components";

const WrapperDiv = styled.div`

      display: flex;
      justify-content: center;
      flex-wrap: wrap; 
      
      .divSenha {
      width: 100%;
      margin: 20px 0;
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
