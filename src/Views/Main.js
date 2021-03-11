import {useEffect} from 'react';
import '../Styles/Main.css';
import CalculatorPace from '../Components/CalculatorPace';
import CalculatorSpeed from '../Components/CalculatorSpeed';
import Menu from '../Components/Menu';

function Main() {
  useEffect(() => {
    document.title = "Calculadora de Velocidade de Corrida"
  }, []);

  return (
    <div className='full'>
      <Menu/>
      <div className="Main">    

          {/*
          <h1 className="Title">
          </h1>
          */}
       
      </div>

      <div className='calculator'> 

            <div className='part-1'>
              <CalculatorPace data={{
                distance: '',
                hours: '',
                minutes: '',
                seconds: '',
                result: '',
                }}
              />
            </div>

            <div className='part-1'>
              <CalculatorSpeed data={{
                distance: '',
                hours: '',
                minutes: '',
                result: '',
                }}
              /> 
            </div>
        </div>
    </div>
    
  );
}

export default Main;
