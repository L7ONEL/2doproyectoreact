import { Component } from "react";
import Boton from "./Boton";

export default class Formulario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: "",
        }
    }

    render(){
        return(
            <div className="Formulario">

                <input
                    type="text"
                    placeholder="Nombre de la materia" 
                    value={this.state.nombre} 
                    onChange={(e) => this.setState({nombre:e.target.value})}
                    required 
                />

                <Boton 
                    accion={()=> this.props.generarNotas(this.state.nombre)} 
                    simbolo="AGREGAR UNA NUEVA NOTA"
                />
                
            </div>
        )
    }

}