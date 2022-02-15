/* archivo pricipal que ensambla todo el codigo (1)*/

import React, {Component} from 'react';
import { BrowserRouter as Router,Routes ,Route, Link } from "react-router-dom";

import './App.css';

import tareas from './ejemplos/tarea.json' /* trae el arreglo de ejemplo */
//importa componentes
import Tareas from './components/Tareas'; /* trae el componente tareas */
import TareaForm from './components/TareaForm';
import Post from './components/Posts'

class App extends Component /* react componente */{

	state = { /* en el estado se encuentra el acrivo tarea.json */
		tareas: tareas
	}
	añadirTarea = (titulo, descripcion) =>{ /* tarea a enviar */
		const NuevaTarea = {
			titulo: titulo,
			descripcion: descripcion,
			id: this.state.tareas.length
		}
		this.setState({ /* envia las tareas nuevas al estado */
			tareas: [...this.state.tareas, NuevaTarea]
		})
	}

	eliminarTarea = (id) => {
		const nuevaTarea = this.state.tareas.filter(tarea => tarea.id !== id)
		this.setState({tareas: nuevaTarea})
	}
	check = (id) =>{
		const Ncheck = this.state.tareas.map(tarea =>{
			if(tarea.id === id){
				tarea.done = !tarea.done
			}
			return tarea
		});
		this.setState({tareas: Ncheck})
	}
	render(){ /* imprime por pantalla */

		return <div className='app'>
			<Router>
				
				<br/>
				
				<Routes>
					<Route path="/" element={
						 <div>
							{/* las llaves permiten ejecutar js */ }
							<Link to="posts">Posts</Link> {/* link es un componente de react */}
							<TareaForm añadirTarea= {this.añadirTarea}/> {/* le manda la tarea a TareaForm */}
							<Tareas tareas={this.state.tareas} eliminarTarea={this.eliminarTarea} check={this.check}/>
							</div>
					}/>
					<Route path='/posts' element={<div>
						<Link to="/">Home</Link>{/* link es un componente de react */}
						<Post/>
						</div>}/>
				</Routes>
			</Router>
		</div>
	}
}

export default App; /* esporta la clase App */
