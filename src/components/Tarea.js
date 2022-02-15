/* componente de estructura el archivo tarea.json (3) */

import React, {Component} from "react"

class Tarea extends Component{

	styleCompleted(){ /* estilos como objetos de js y permiten condicionales */
		return {
			fontSize: '20px',
			color: this.props.tarea.done ? 'gray' : 'black', /* if ? y else :*/
			textDecorationLine: this.props.tarea.done ? 'line-through' :'none' /* if ? y else :*/

		}
	}
	
	render() {
		const {tarea} = this.props /* extrae datos de this.props y los guada en tareas */
		return <p style={this.styleCompleted()}> {/* llama a los estilos como una funcion */}
				{tarea.titulo} - 
				{tarea.descripcion} - 
				{tarea.done}  
				{tarea.id}
				<input type='checkbox'onChange={this.props.check.bind(this, tarea.id)}/>
				<button style={btnDelete} onClick={this.props.eliminarTarea.bind(this, tarea.id)}> {/* llama a los estilos css */}
					x
				</button>
			</p>
	}
}
const btnDelete = { /* estilos objetos js + css */
	fontSize: '10px',
	background: '#ea2027',
	color: '#fff',
	boder: 'none',
	padding: '10px 15px',
	borderRadius: '50px',
	cursor: 'pointer'
}
export default Tarea;