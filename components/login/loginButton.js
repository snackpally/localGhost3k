import React from 'react';
import axios from 'axios'; 
import { Button } from 'reactstrap';
import $ from 'jquery'; 

class SignUp extends React.Component {
	
	handleSubmit() {
		axios.post('http://localhost:3001/user/register').then(function (res) {
			console.log(res);
		})
		.catch(function (err) {
			console.log(err);
		});
	}

	render() {
		return (

		);
	}
}