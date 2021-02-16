
import React, { Component} from 'react';
import '../Styles/CalculatorSpeed.css';

export default class CalculatorSpeed extends Component {

    constructor(props) {
        super(props);

        this.state = {
            distance_value: 0,
            hours_value: 0,
            minutes_value: 0,
            result_value: 0,
            seconds_value: 0,
            
        };

        this.converter = this.converter.bind(this);        
        
    }

    converter() {

        let dist = parseFloat(this.state.distance_value);

        if (isNaN(dist)) {
            dist = 0;
        };

        let hour = parseFloat(this.state.hours_value) * 60;

        if (isNaN(hour)) {
            hour = 0;
        };

        let minute = parseFloat(this.state.minutes_value);

        if (isNaN(minute)) {
            minute = 0;
        };

        let second = parseFloat(this.state.seconds_value) / 60;

        if (isNaN(second)) {
            second = 0;
        };

        let time = hour + minute + second;

        let result = ((dist / time) * 60).toFixed(2);

        const result_str = result.toString();
        
        let result_value = result_str + '(km/h)';

        this.setState({result_value});

    }

    render(){
        return(

            <form className="Data" method='GET'>
                <h1>Sua Velocidade</h1>

                <h2>Quanto você percorreu (em km)?</h2>
                <input className='distance' type='text' inputMode='numeric' onChange={(event) => {this.setState({distance_value:event.target.value})}}></input>

                <h2>Em quanto tempo?</h2>
                
                <h3>Qtd de horas 
                </h3>
                <input className='hours' type='text' inputMode='numeric' onChange={(event) => {this.setState({hours_value:event.target.value})}}></input>

                <h3>Qtd de minutos
                </h3>  
                <input className='minutes' type='text' inputMode='numeric' onChange={(event) => {this.setState({minutes_value:event.target.value})}}></input>

                <h3>Qtd de segundos
                </h3>  
                <input className='seconds' type='text' inputMode='numeric' onChange={(event) => {this.setState({seconds_value:event.target.value})}}></input>

                <h3>Resultado (km/h)</h3>
                <h1>{this.state.result_value}</h1>

                <input type='button' value='Calcular' className='Button' onClick={this.converter} ></input>

            </form>
        );
    }
}

