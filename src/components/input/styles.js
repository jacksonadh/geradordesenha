import styled from 'styled-components'
import { Form as Unform } from '@unform/web'

export const Form = styled(Unform)`
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

input[type=number] {
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
      /* Firefox */
      -moz-appearance: textfield;
      }

      /* Chrome, Safari, Edge, Opera */
      input::-webkit-outer-spin-button,
      input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }
      .inputId {
        display: none;
      }
`