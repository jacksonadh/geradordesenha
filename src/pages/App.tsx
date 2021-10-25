import './App.css';
import Logo from "../assets/logomarca.png"
import Input from '../components/input/input'
import Button from '../components/button/button'

function App() {

  let nomeMes = new Array("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro")
  let hoje = new Date

  return (
    <div className="content">
      <img src={Logo} alt="" />
      <Input
        id="medico"
        label="Médico"
        text="Marcio Borges"
      />
      <Input
        id="especialidade"
        label="Especialidade"
        text="Urologia"
      />
      <p>{hoje.getDate()} de {nomeMes[hoje.getMonth()]} de {hoje.getFullYear()}</p>


      <Button idForm="formSenha" />
    </div>
  );
}

export default App;
