import { Component } from 'react'
import Boton from './Boton';

export default class Nota extends Component {
    constructor(props) {
      super(props);
      this.state = {
        materia: "",
        nota: 0,
      }
    }

    componentDidMount() {
      this.setState({
        materia: this.props.children,
        nota: this.props.nota
      });
    }

    render() {
      return(
        <div className="Nota">
          <span className='Titulo'>{this.state.materia}</span>
          <input type="number" value={this.state.nota} />
          <div className="Botonera">
            <Boton 
              simbolo='Cambiar'
              accion={() => {this.cambiar()}}
            />

            <Boton 
              simbolo='X'
              accion={() => this.props.eliminar()}
            />
          </div>
        </div>
      )
    }

}