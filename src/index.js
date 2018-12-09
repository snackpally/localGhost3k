import React from 'react';
import ReactDOM from 'react-dom';
import UserForm from './components/login/login';
import Card from './components/carousel/card';
import Carousel from './components/carousel/carouselCont';
import axios from 'axios';

class HelloWorld extends React.Component {
	render() {
		return (
			<div>
				<Carousel />
			</div>

		)
	}
}
// class HelloWorld extends React.Component {
// 	constructor(){
// 		super()
// 		this.state={
// 			data: "",
// 			ready:false
// 		}
// 		this.cards = []
// 	}
//
// 	componentDidMount(){
// 		axios.get('http://localhost:3001/location/test').then(res=>{
// 			this.setState({
// 				data: res.data,
// 				ready:true
// 			});
// 		});
// 	}
//
// generateCards() {
// 	for (let i = 0; i < this.state.data.length;i++){
// 	 this.cards.push(<Card key={i} data={this.state.data[i]}/>)
// 	}
// }
//
// 	render() {
// 		this.generateCards()
// 		if (this.state.ready) {
// 			return(
// 				<div className='box'>
// 					{this.cards}
// 				</div>
// 			)
// 		} else {
// 			return(<div>Loading...</div>)
// 		}
// 	}
//
// }

ReactDOM.render(
	<HelloWorld />,
	document.getElementById('root')
);
