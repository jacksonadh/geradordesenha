import styled from "styled-components";

const WrapperDiv = styled.div`
label {
  display: inline-grid;
  display: -ms-inline-grid;
  display: -moz-inline-box;
  margin-bottom: 5px;
  
  width: 100%;
  text-align: center;

  font-family: Sora;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 23px;
  letter-spacing: 0em;

}

input {
  width: 247px;
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

input:hover {
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

input:hover::placeholder {
  color: #fff;
}

input::placeholder {
  color: #000;
}
`;

export default WrapperDiv;