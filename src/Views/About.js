import {Component, React} from 'react';
import {Wrapper, Head, Box, TopLetter, Text} from '../Styles/stylesheet';
import Menu from '../Components/Menu';
import FooterComponent from '../Components/Footer';
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

        <FooterComponent/>
      </Wrapper>            
    )
  }
}

export default About;