import {useEffect} from 'react';
import "../index.css";
import CalculatorPace from '../Components/CalculatorPace';
import CalculatorSpeed from '../Components/CalculatorSpeed';
import Menu from '../Components/Menu';
import FooterComponent from '../Components/Footer';
import {Page, PageHeader, Title, CalcSpace, Calculus} from '../Styles/stylesheet';

function Main() {
  useEffect(() => {
    document.title = "Calculadora de Velocidade de Corrida"
  }, []);

  return (
    <Page>
      <Menu/>
      <PageHeader />   

      <Title>
      Corra mais, e descubra sua melhora aqui!
      </Title>
      <CalcSpace> 
            <Calculus>
              <CalculatorPace data={{
                distance: '',
                hours: '',
                minutes: '',
                seconds: '',
                result: '',
                }}
              />
            </Calculus>

            <Calculus>
              <CalculatorSpeed data={{
                distance: '',
                hours: '',
                minutes: '',
                result: '',
                }}
              /> 
            </Calculus>
      </CalcSpace>
      
      <FooterComponent/>
    </Page> 
  );
};

export default Main;

