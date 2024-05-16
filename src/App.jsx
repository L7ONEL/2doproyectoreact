import { Component } from "react"
import './App.css'
import Formulario from "./componentes/Formulario";

export default class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      notas: [],
      promedio: 0
    }
  }

  generarNotas(nombre) {

    let nuevasNotas = this.state.notas;
    nuevasNotas.push({nombre, valor: 0});

    this.setState({contadores: nuevosContadores});

  }
  
  render(){
    return(
      <div className="Contenedor">

        <Formulario 
          generarNotas = {(nombre) => this.generarNotas(nombre)}
        />

        <div className="ListaNotas">
          {this.state.notas.map((cont, index) => 
            <Nota>
              {cont.nota}
            </Nota>
          )}
        </div>

        <h2>Promedio: </h2>
      </div>
    )
  }
}