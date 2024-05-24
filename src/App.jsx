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
    nuevasNotas.push({materia: nombre, nota: 0});

    this.setState({notas: nuevasNotas}, this.calcularPromedio)
  }

  borrarTodo() {
    this.setState({notas: []})
  }

  calcularPromedio() {
    if (this.state.notas.length === 0) {
      return this.setState({ promedio: 0 });
    } else {

      let notas = [];

      for (let i = 0; i < this.state.notas.length; i++) {
        notas.push(this.state.notas[i].nota);
      }
    
      let suma = this.state.notas.reduce((acumulador, notaActual) => parseFloat(acumulador) + parseFloat(notaActual), 0);
      let promedio = suma / longitud;
    
      this.setState({ promedio });
    }
  }
  
  cambiarNota(index, nuevaNota) {
    if (nuevaNota <= 10 && nuevaNota > 0) {
      let nuevasNotas = this.state.notas.slice();
      nuevasNotas[index].nota = nuevaNota;

      this.setState({notas: nuevasNotas}, this.calcularPromedio);
    } else {
      alert('La nueva nota tiene que ser mayor a 0 y no puede ser mayor que 10.');
      return;
    }    
  }

  eliminar(pos) {
    let nuevasNotas = this.state.notas;
    nuevasNotas.splice(pos, 1)

    this.setState({notas: nuevasNotas});
  }

  render(){
    return(
      <div className="Contenedor">

        <Formulario 
          generarNotas = {(nombre) => this.generarNotas(nombre)}
          borrarTodo = {() => this.borrarTodo()}
        />

        <div className="ListaNotas">
          {this.state.notas.map((cont, index) => 
            <Nota
              valor = {cont.nota}
              key = {cont.materia}
              cambiarNota = {(nuevaNota) => this.cambiarNota(index, nuevaNota)}
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