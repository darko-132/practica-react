/* archivo muestra el componente tarea (2) */

import React, {Component} from "react";

import Tarea from "./Tarea"
/* componente */

class Tareas extends Component {
   
	render() { /* hace un mapeo de archivo tarea.json (es llamado como tareas) */
		return this.props.tareas.map(tarea => <Tarea tarea={tarea} 
			eliminarTarea={this.props.eliminarTarea} 
			check={this.props.check}
			key={tarea.id}/>);
	}
}

export default Tareas;
