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


ReactDOM.render(
	<HelloWorld />,
	document.getElementById('root')
);
