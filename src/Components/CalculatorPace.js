import React, { Component } from 'react';
import '../Styles/CalculatorPace.css';

export default class CalculatorPace extends Component {

    constructor(props) {
        super(props);

        this.state = {
            distance_value: 0,
            result_value: 0,
            hours_value: 0,
            minutes_value: 0,
            seconds_value: 0,
        }

        this.converter = this.converter.bind(this);        
        
    }

    converter(){

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

        let calculation = (time/dist).toFixed(2);
        const str1 = calculation.toString();
        const splitted = str1.split('.');
        
        let int = parseInt(splitted[0]);
        let dec = parseFloat(splitted[1]);

        let dec1 = ((dec * 6)/10).toFixed(0);

        const int_1 = int.toString();
        const dec_2 = dec1.toString();
              
        let result_value = int_1 + 'min e ' + dec_2 + 'seg por km';

        this.setState({result_value});

        console.log(result_value);

    }

    

    render(){
        return(

            <form className="Data" method='GET'>
                <h1>Seu Tempo Por km</h1>

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

                <h3>Resultado (min/km)</h3>
                <h1>{this.state.result_value}</h1>

                <input type='button' value='Calcular' className='Button' onClick={this.converter} ></input>

            </form>

        );
    }
}

