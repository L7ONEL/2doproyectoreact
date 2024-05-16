import { Component } from "react"
import Boton from './componentes/Boton'
import './App.css'

export default class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      notas: [],
      promedio: 0
    }
  }

  generarNotas() {
    let nuevasNotas = this.state.notas;
    nuevasNotas.push({nota: 0});

    this.setState({notas: nuevasNotas});
  }
  
  render(){
    return(
      <div className="Contenedor">
        <Boton 
          generarNotas = {() => this.generarNotas()}
          simbolo = "AGREGAR UNA NUEVA NOTA"
        />

        {this.state.notas.map((cont, index) => 
          <Nota>
            {cont.nota}
          </Nota>
        )}

        <div className="ListaNotas">
          <h2>Promedio: </h2>
        </div>
      </div>
    )
  }
}