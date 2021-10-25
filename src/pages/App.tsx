import './App.css';
import Logo from "../assets/logomarca.png"
import Input from '../components/input/input'
import Button from '../components/button/button'

function App() {
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
      <p>23 de Outubro de 2021</p>

      <Button idForm="formSenha" />
    </div>
  );
}

export default App;
