import React, { Component } from 'react';
import '../Styles/CalculatorSpeed.css';

export default class CalculatorSpeed extends Component {

    constructor(props) {
        super(props);

        this.state = {
            distance_value: '',
            hours_value: '',
            minutes_value: '',
            result_value: 0,

        }

        this.converter = this.converter.bind(this);        
        
    }

    converter(){

        let distance = parseFloat(this.state.distance_value)
        let hours = parseFloat(this.state.hours_value * 60)
        let minutes = parseFloat(this.state.minutes_value)
        let time = hours + minutes

        let result_value = ((distance / time) * 60).toFixed(2)
        this.setState({result_value})

        console.log(result_value)


    }

    render(){
        return(

            <form className="Data" method='GET'>
                <h1>Sua Velocidade</h1>

                <h2>Quanto você percorreu (em km)?</h2>
                <input className='distance' type='text' onChange={(event) => {this.setState({distance_value:event.target.value})}}></input>

                <h2>Em quanto tempo?</h2>
                
                <h3>Qtd de horas 
                </h3>
                <input className='hours' type='text' onChange={(event) => {this.setState({hours_value:event.target.value})}}></input>

                <h3>Qtd de minutos
                </h3>  
                <input className='minutes' type='text' onChange={(event) => {this.setState({minutes_value:event.target.value})}}></input>

                <h3>Resultado (km/h)</h3>
                <h1>{this.state.result_value}</h1>

                <input type='button' value='Calcular' className='Button' onClick={this.converter} ></input>

            </form>
        );
    }
}

