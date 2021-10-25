
import { useState } from 'react'
import './input.css'

type inputProps = {
  label: string;
  id: string;
  text: string;
  value?: string;
}

export default function Input(props: inputProps) {

  const [text, setText] = useState("")

  return (
    <div>
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
    </div>

  );
}