import {Component, React} from 'react';
import {Wrapper, Head, Box, TopLetter, Text} from '../Styles/stylesheet';
import Menu from '../Components/Menu';
import FooterComponent from '../Components/Footer';

class Title extends Component {
  render() {
    return(
      <Wrapper>
          <Menu/>
          <Head/>

          <Box>
            <TopLetter>
              Por Que Você Deveria Acompanhar Sua Corrida?
            </TopLetter>

            <Text>
              <p>Para um atleta amador, o acompanhamento de corrida de rua pode ser de extrema importância.</p>
              <p>Durante a corrida de rua, muitas vezes, existe o processo natural de melhora. Muitas pessoas são tentadas a melhorar os números, conforme possam pegar o gosto de correr, e criar o hábito natural de ir além daquele limite atual.</p>
              <p>Para tal, se não houver diversos fatores, como um acompanhamento de um profissional, uma alimentação correta, entre tantos fatores, podem haver severos problemas para o corpo, conforme este hábito começa a se tornar cada vez mais intenso.</p>
              <p>Apesar disso, nem todos possuem uma condição financeira para realizar tais ações, e a corrida acaba se tornando um problema quando há lesões por esforço excessivo ou mesmo uma fadiga exacerbada, sem ao menos saber qual é o seu ritmo ideal para continuar aprimorando, sem criar estresse demais para o corpo, o que faz muitas pessoas desistirem no começo.</p>
              <p>A ideia desta calculadora é, afinal, criar uma forma de dar suporte, para quem está começando e quem já está há bastante tempo nesta prática, de forma que a pessoa, possa acompanhar seu rendimento. Muitas vezes, na corrida, os trechos se alternam, subidas, grandes retas, e isto faz com que a velocidade varie.</p>
              <p>Alguns aplicativos, embora forneçam serviços de mapas e dados sobre pace ou velocidade, nem sempre conseguem ser precisos em trechos específicos, em mostrar sua velocidade dado 1km ou segmentando dados de passada ou velocidade. a generalização dos dados, em certo momento, pode não representar a realidade. Para tal, a concepção desta calculadora tenta criar uma ferramenta, tanto para o uso mobile quanto em desktop, para a realização desta análise dos dados, e assim, facilitar o entendimento para a pessoa, dando suporte para que possa criar um aprimoramento sobre sua prática.</p>
            </Text>
          </Box>

          <FooterComponent/>
      </Wrapper>            
    )
  }
}

export default Title;

