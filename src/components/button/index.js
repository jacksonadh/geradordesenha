import React from 'react';
import WrapperDiv from './style.js'

export default function Button(props) {

  return (

    <WrapperDiv className="btnSenha">
      <button onClick={props.onClick}> {props.name} </button>
    </WrapperDiv>

  );
}