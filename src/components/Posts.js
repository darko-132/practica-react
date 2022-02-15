import React, {Component} from "react";


class Post extends Component{
	state={
		posts:[]
	}
	async componentDidMount(){
		const res = await fetch('https://jsonplaceholder.typicode.com/posts');
		const data = await res.json();
		this.setState({posts: data})
	}
	render(){
		return(
			<div>
				<h1>POSTS</h1>
				{
					this.state.posts.map(posts =>{
						return <div key={posts.id}>
							<h3>{posts.title}</h3>
							<p>{posts.body}</p>
						</div>
					})
				}
			</div>
		)
	}
}

export default Post;