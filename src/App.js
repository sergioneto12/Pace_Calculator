import {useEffect} from 'react';
import './App.css';
import CalculatorPace from './Components/CalculatorPace';
import CalculatorSpeed from './Components/CalculatorSpeed';

function App() {
  useEffect(() => {
    document.title = "A Calculadora Prática de Corrida"
  }, []);

  return (
    <div>
      <div className="Main">
        <header className="Main-header">

          <h1 className="Title">Calcule Aqui da Forma Mais Rápida e Eficiente!</h1>
        
        </header>

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

      <div className='text'>
        <section className='section'>
          <article className='paragraph'>
            <h1>
              Por Que Você Deveria Acompanhar Sua Corrida?
            </h1>

            <h3>
              Este acompanhamento pode ser útil na melhora do atleta, seja amador ou profisional, na realização de maiores distâncias, ou menor tempo, promovendo um valor eficaz que pode acelerar os treinamentos e criar maior resistência e promover, também, maior precisão na análise de seus dados.
            </h3>

            <image src={Map} width='300' alt='Sorry, not available'></image>

          </article>

          <article className='paragraph-2'>
            <h1>
              E como melhorar meu Pace e/ou minha Velocidade?
            </h1>

            <h3>
              <p>Normalmente, um especialista é essencial no assunto, mas podemos tirar algumas conclusões simples nesta questão:</p>
              <p>1 - Só depende de você e do seu corpo. Nunca deve se comparar a ninguém como parâmetro.</p>
              <p>2 - Exercícios são fundamentais para melhorar seu desempenho. Hoje em dia, até mesmo soluções de apps (alguns pagos, outros gratuitos) podem ajudar a quem quer sair do sedentarismo</p>
              <p>3 - Não se deve começar com grandes distâncias ou grandes velocidades. Acostume seu corpo aos poucos. Paciência é fundamental nessas horas!</p>
              <p>4 - Lembre-se de não se esforçar além da conta. Sempre faça alongamentos e aproveite para relaxar. Causar mais tensão no corpo, para obter resultados, não é nada saudável!</p>

              
            </h3>
          </article>
        </section>
      </div>

     {/*<iframe className='CGC' title="Calculadora de Gordura Corporal" src="https://pt.calcuworld.com/nutricao/percentagem-de-gordura-corporal/?iframe=1"></iframe>*/}

     
     
    </div>
    
  );
}

export default App;
