import { useState } from 'react';
import './button.css'


type buttonProps = {
  id?: string;
  idForm: string;
}

export default function Button(props: buttonProps) {

  const [counter, setCounter] = useState(0)

  function gerarSenha() {
    setCounter(counter + 1);
    console.log(counter)
  }
  return (

    <div className="btnSenha">
      <div className="divSenha">
        <input type="number" value={counter} className="inputSenha" />
      </div>
      <button onClick={gerarSenha}> gerar senha </button>
    </div>

  );
}