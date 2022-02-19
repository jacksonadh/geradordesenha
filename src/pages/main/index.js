import Button from '../../components/button/button';
import WrapperDiv from './style'
import Logo from '../../assets/logomarca.png'
import Input from '../../components/input';

import Moment from 'react-moment';
import 'moment/locale/pt-br'

import useState from 'react'

function App() {
  const senhaInicial = {
    id: "",
    medico: "",
    especialidade: "",
    senhasGerada: []
  }

  const [senha, setSenha] = useState(senhaInicial)
  let listaSenha = [];


  const [counter, setCounter] = useState(0)

  function contador() {
    setCounter(counter + 1);
    console.log(counter)
  }

  const senhaArmazenar = (chave, senha) => {

    console.log(senha.id)
    console.log(senha.especialidade)
    console.log(senha.medico)
    console.log(senha.senhaGerada)
    localStorage.setItem(chave, setSenha)
  };

  function gerarSenha() {
    contador()
    senhaArmazenar()
  }

  return (
    <WrapperDiv className="App">
      <img src={Logo} alt="logo da clínica Sermec" />
      <Input
        id="medico"
        label="Médico"
        text="Marcio Borges"
        value={senhaInicial.medico}
        onChange={(e) => setSenha(e.target.value)}
      />
      <Input
        id="especialidade"
        label="Especialidade"
        text="Urologia"
        value={senhaInicial.especialidade}
        onChange={(e) => setSenha(e.target.value)}
      />
      <p><Moment format="DD MMM YYYY" locale="" /></p>
      <Button name="GERAR SENHA" onClick={() => gerarSenha(senhaInicial.id, senha)} />
    </WrapperDiv>
  );
}

export default App;
