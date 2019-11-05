import React, { Component } from 'react';
import './style.css'


class App extends Component{

    constructor(props){
    super(props);
    this.state={
      numero:0,
      botao: 'Vai'

    };
    this.timer = null;
    this.vai = this.vai.bind(this);
    this.limpar = this.limpar.bind(this);

  }

  vai(){

    let state = this.state;

    if(this.timer != null){  // se o cronometro tiver a correr 
      clearInterval(this.timer);  // clearINterval  pausa o timer
      this.timer = null; // em pausa o timer fica nulo ( pausado, nao corre )
      state.botao = 'Continuar' // o estado do botao passa para CONTINUAR
    }else {

    this.timer = setInterval(()=>{  // criamos um intervalo para correr
        let state = this.state;
        state.numero += 0.1;  
        this.setState(state);
    },100)
    state.botao = "Pausar";
  }

  this.setState(state);

  }

  limpar(){
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
    }

    let state = this.state;
    state.numero = 0;
    state.botao = 'Vai';
    this.setState(state);

  }




  render(){
    return(
      <div className="container">
        <h3>Cronometro</h3>
        <img src={require('./assets/cronometro.png')} className="img"/>
        <a className="timer">{this.state.numero.toFixed(1)}</a>
        <div className="areaBotao">
          <a className="botao" onClick={this.vai}>{this.state.botao}</a><br />
          <a className="botao" onClick={this.limpar}>Limpar</a>
        </div>
      </div>
    );
  }
}



export default App;
