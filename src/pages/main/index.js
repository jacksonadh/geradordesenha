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
  const [senhaGerada, setSenhaGerada] = useState([]);

  let idSenha = medico + especialidade;

  useEffect(() => {
    setSenhaGerada(prev => [...prev, counter])
  }, [counter])

  useEffect(() => {
    ApiServices.getAll()
      .then((result) => {
        result.forEach(function (valorAtual, index) {

          if (idSenha === valorAtual.idSenha) {
            var senhaToUpdate = index + 1
            ApiServices.updateById(senhaToUpdate, setSenhaGerada(prev => [...prev, counter]))
            console.log("Este é o valor do index", senhaToUpdate)
          } else {
            ApiServices.create({
              medico: medico,
              especialidade: especialidade,
              senha: senhaGerada.length,
              idSenha: idSenha
            })
          }
        }


        )
        /* for (var prop in result) {
            var senhaToUpdate = result[prop].toString()
           
           
            console.log(senhaToUpdate.indexOf(idSenha))
          }
          /*if (senhaToUpdate === 0) {
            ApiServices.updateById(senhaToUpdate, setSenhaGerada(prev => [...prev, counter]))
          } else {
            gerarSenha()
          }*/
        //console.log("senhaToUpdate: ", senhaToUpdate);

      });
  }, [counter]);
  /*
  useEffect(() => {
  ApiServices.getAll()
    .then((result) => {
      const senhaToUpdate = result.indexOf(idSenha)
      console.log(senhaToUpdate);
    });
  }, []);

  function gerarSenha() {
    ApiServices.create({
      medico: medico,
      especialidade: especialidade,
      senha: senhaGerada.length,
      idSenha: idSenha
    })
  }

  //console.log(ApiServices)
  /* function atualizarSenha() {
     ApiServices.updateById(senhaToUpdate, setSenhaGerada(prev => [...prev, counter]))
   }
  */

  function contador() {
    setCounter(counter + 1)
  }

  function handleClick() {
    contador()
    /*gerarSenha()*/
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
