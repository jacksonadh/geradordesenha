import React, { useState, useEffect } from 'react';
import WrapperDiv from './styles'
import Logo from '../../assets/logomarca.png'

import MyForm from '../../components/input'
import Button from '../../components/button'

import Moment from 'react-moment';
import 'moment/locale/pt-br'

import { Form } from '@unform/web'
import { ApiServices } from '../../services/servicesApi'


function App() {
  const [counter, setCounter] = useState(0);
  const [medico, setMedico] = useState("");
  const [especialidade, setEspecialidade] = useState("");
  const senhaGerada = [];
  let idSenha = medico + especialidade;

  const [senhasGerada, setSenhasGerada] = useState({
    medico: "",
    especialidade: "",
    senha: 0,
    idSenha: ""
  })

  useEffect(() => {
    ApiServices.getAll()
      .then((result) => {
        console.log(result);
      });
  }, []);

  function gerarSenha() {
    ApiServices.create({
      medico: medico,
      especialidade: especialidade,
      senha: senhaGerada.push(counter),
      idSenha: idSenha
    })
  }

  /*function atualizarSenha(){
    const senhaToUpdate = senhasGerada.find
    ApiServices.updateById(id, senha) => {
      ...senhaToUpdate,
    }
  }*/

  function contador() {
    setCounter(counter + 1)
  }

  function handleClick() {
    contador()
    gerarSenha()
  }

  function handleFormSubmit(senha) {
    localStorage.setItem(idSenha, senha)
  }

  return (
    <WrapperDiv className="App">

      <img src={Logo} alt="Logomarca Clínica Sermec" />

      <Form onSubmit={handleFormSubmit}>
        <MyForm
          name="medico"
          onChange={event => setMedico(event.target.value)}
          type="text"
          label="MÉDICO" />

        <MyForm
          name="especialidade"
          onChange={event => setEspecialidade(event.target.value)}
          type="text"
          label="ESPECIALIDADE" />

        <p><Moment format="DD MMM YYYY" locale="" /></p>

        <div className="divSenha">
          <MyForm
            className="inputId"
            name="id"
            value={idSenha} />

          <MyForm
            name="senha"
            type="number"
            className="inputSenha"
            onChange={event => setCounter(event.target.value)}
            value={counter} />

        </div>
        <Button onClick={handleClick} name="GERAR SENHA" type="submit" />
      </Form>

    </WrapperDiv>
  );
}

export default App;
