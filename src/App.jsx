import { Component } from "react"
import './App.css'
import Formulario from "./componentes/Formulario";
import Nota from "./componentes/Nota"

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
    let i = this.state.notas.length
    nuevasNotas.push({id: i+1, materia: nombre, nota: 0});

    this.setState({notas: nuevasNotas}, this.calcularPromedio(i+1))
    console.log(this.state.notas);

  }

  calcularPromedio(longitud) {

    if (longitud.length === 0) {
      this.setState({ promedio: 0 });
      return;
    } else {

      let notas = [];

      for (let i = 0; i < this.state.notas; i++) {
        notas.push(this.state.notas[i].nota);
      }
    
      let sum = notas.reduce((acumulador, current) => acumulador + current, 0);
      let promedio = sum / longitud;
    
      this.setState({ promedio });
    }
  }

  eliminar(pos) {

    let nuevasNotas = this.state.notas;
    nuevasNotas.splice(pos-1, 1)

    this.setState({notas: nuevasNotas});

  }
  
  render(){
    return(
      <div className="Contenedor">

        <Formulario 
          generarNotas = {(nombre) => this.generarNotas(nombre)}
        />

        <div className="ListaNotas">
          {this.state.notas.map((cont, index) => 
            <Nota
              valor = {cont.nota}
              key = {cont.id}
              eliminar = {() => this.eliminar(index)}
            >
              {cont.materia}
            </Nota>
          )}
        </div>

        <h2>Promedio: {this.state.promedio.toFixed(2)}</h2>
      </div>
    )
  }
}