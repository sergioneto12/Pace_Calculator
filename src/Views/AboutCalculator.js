import {Component, React} from 'react';
import Menu from '../Components/Menu';
import styled from 'styled-components';
import img from '../Images/running-1.jpg';

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
      </Wrapper>            
    )
  }
}

const Wrapper = styled.section`
  background-color: #d3dada;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  padding-bottom: 5%;
`;

const Head = styled.div`
  text-align: center;
  width: 100%;
  height: 80vh;
  background-image: url(${img});
  background-size: 100%;
  background-position-y: 30%;
  background-repeat: no-repeat;
  justify-content: center;
  align-items: center;
  padding-top: 1%;
  margin-bottom: 5%;

  @media (max-width: 999px) {
    text-align: center;
    width: 100%;
    height: 50vh;
    justify-content: center;
    align-items: center;
    padding-top: 1%;
    margin-bottom: 5%;

  }

  @media (max-width: 430px) {
    text-align: center;
    width: 100%;
    height: 20vh;
    justify-content: center;
    align-items: center;
    padding-top: 1%;
    margin-bottom: 5%;

  }
`;

const TopLetter = styled.h1`
  margin-top: -5%;
  padding-top: 5%;
  font-size: 175%;
  font-weight: bold;  
  font-family: 'Roboto';
  color: white;
  width: 100%;
  text-align: center;

  @media (max-width: 999px) {
    font-size: 175%;
    }
`;

const Text  = styled.h1`  
  font-size: 120%;

  p {
    font-size: 90%; 
    font-family: 'Arial';
    color: white;
    width: 100%;
    text-align: justify;
  }

  @media (max-width: 999px) {
    font-size: 120%;

    p {
      font-size: 80%; 
      font-family: 'Arial';
      color: white;
      width: 100%;
      text-align: justify;
    }

    @media (max-width: 430px) {
      font-size: 85%;

      p {
      font-size: 95%; 
      font-family: 'Arial';
      color: white;
      width: 100%;
      text-align: justify;
    }
    }
  }
`

const Box = styled.article`
  padding: 2%;
  margin-left: 5%; 
  background-color: #199e82;
  width: 60%;
  text-align: center;

  @media (max-width: 999px) {
    padding: 4%;
    margin-top: -15%;
    margin-left: 3%; 
    background-color: #199e82;
    width: 85%;
    text-align: center;
  }
`;

export default Title;