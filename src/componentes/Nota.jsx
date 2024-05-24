import { Component } from 'react'
import Boton from './Boton';

export default class Nota extends Component {
    constructor(props) {
      super(props);
      this.state = {
        materia: "",
      }
    }

    componentDidMount() {
      this.setState({
        materia: this.props.children,
        nota: this.props.nota
      });
    }

    cambiar = (e) => {
      const nuevaNota = Number(e.target.value);

      this.props.cambiarNota(nuevaNota);
    }

    render() {
      return(
        <div className="Nota">
          <span className='Titulo'>{this.state.materia}</span>
          <input 
            type="number"
            onChange={this.cambiar}
          />

          <Boton 
            simbolo='X'
            accion={() => this.props.eliminar()}
          />
        </div>
      )
    }

}