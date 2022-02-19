
import { useState } from 'react'
import WrapperDiv from './style.js'

export default function Input(props) {

  const [text, setText] = useState("")

  return (
    <WrapperDiv>
      <form id="formSenha">
        <label
          htmlFor={props.id}>
          {props.label}
        </label>
        <input
          type="text"
          placeholder={props.text}
          id={props.id}
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </form>
    </WrapperDiv>

  );
}