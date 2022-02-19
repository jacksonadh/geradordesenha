import Button from '../../components/button/button';
import WrapperDiv from './style'
import Logo from '../../assets/logomarca.png'
import Input from '../../components/input';

function Print() {
  return (
    <WrapperDiv>
      <img src={Logo} alt="logo da clínica Sermec" />
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

      <Button name="A gente cuida do mais importante: você" />
    </WrapperDiv>
  );
}

export default Print;
