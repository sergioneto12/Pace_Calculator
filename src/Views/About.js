import {Component, React} from 'react';
import Menu from '../Components/Menu';
import styled from 'styled-components';
import img from '../Images/running-1.jpg';

class About extends Component {
  render() {
    return(
      <Wrapper>
          <Menu/>
          <Head/>

          <Box>
            <TopLetter>
              Sobre o Autor e a Ideia
            </TopLetter>

            <Text>
              <p>Após uma cirurgia na região do tórax, foi necessário reaprender a respirar, caminhar, correr. Assim comecei a ideializar uma ideia para que, como no passado, pudesse ter bons números nas práticas de atividades aeróbicas</p>

              <p>Embora tivesse boas ferramentas para me auxiliar, de certa forma, o que mais foi impactante era descobrir como ter uma linearidade e constância na prática de corrida de rua. Desta forma, comecei a fazer medições sobre meu tempo, distância percorrida, e entender como medir os trechos poderia me auxiliar a criar um hábito de ir além, de acordo com minhas possibilidades atuais.</p>


              <p>Embora existam boas ferramentas para o cálculo dos valores numa corrida, me senti desconfortável com alguns detalhes apresentados, e decidi criar minhas próprias ferramentas, de forma a ser mais assertivo com quem precisasse destas mesmas ferramentas.</p>

              <p>Não dispensaria, jamais a ajuda de um profissional de educação física para o auxílio de ativiades. Muitos destes profissionais me ajudaram a entender como melhorar a prática de atividade física. Entretanto, como nem todos nós poderemos usufruir desta ajuda, acredito que poder criar uma ferramenta para auxiliar na corrida, além de ser benéfico para quem possa necessitar, é uma forma de devolver toda a ajuda que já recebi.</p>

              <p>Se houver alguma sugestão, por favor, entre em contato. Nenhuma ferramenta está pronta o suficiente para não ser aprimorada! Vou gostar de ouvir sua sugestão!</p>

              <p>LinkedIn: <a href='https://www.linkedin.com/in/sergioguilhermeneto/'>Sergio Guilherme Neto</a></p>
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

export default About;