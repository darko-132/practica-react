import React, {Component} from "react";

export default class TareaForm extends Component{ /* esporta la clase en usa linea, es lo mismo que exportar a lo ultimo */

	state = {
		titulo: "",
		descripcion:""
	}
	enviar = (e) =>{ /* evitar que se refresque la pagina */
		/* console.log(this.state) */
		e.preventDefault(); /* cancela el refresco */
		this.props.añadirTarea(this.state.titulo, this.state.descripcion)
	}

	datos = (e) =>{
		/* console.log(e.target.name, e.target.value) */
		this.setState({
			[e.target.name]: e.target.value
		})
	}
render(){
	
	return(
		<form onSubmit={this.enviar}>

			{/* onChange escucha los cambios en los inputs */}
			<input type="text" 
			placeholder="Escriba una tarea" 
			onChange={this.datos} 
			value={this.state.titulo}
			name="titulo"
			/>
			<br/>
			<br/>
			<textarea placeholder="Escriba una descripcion" 
			onChange={this.datos}
			value={this.state.descripcion}
			name= "descripcion">
			</textarea>
			<br/>
			<input type="submit"/>
		</form>
	)
}
}

