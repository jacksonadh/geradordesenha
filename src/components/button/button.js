import { useState } from 'react';
import WrapperDiv from './style.js'



export default function Button(props) {


  return (

    <WrapperDiv className="btnSenha">
      <div className="divSenha">
        <input type="number" value={props.counter} className="inputSenha" />
      </div>
      <button onClick={props.onClick}> {props.name} </button>
    </WrapperDiv>

  );
}