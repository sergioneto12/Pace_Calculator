import './App.css';
import CalculatorPace from './Components/CalculatorPace';
import CalculatorSpeed from './Components/CalculatorSpeed';

function App() {
  return (
    <div className="Main">
      <header className="Main-header">

      <h1>Calcule Aqui da Forma Mais Rápida e Eficiente!</h1>
      
      </header>
  
      <CalculatorPace data={{
        distance: '',
        hours: '',
        minutes: '',
        result: '',
        }}
      /> 

      <CalculatorSpeed data={{
        distance: '',
        hours: '',
        minutes: '',
        result: '',
        }}
      /> 
    </div>
  );
}

export default App;
