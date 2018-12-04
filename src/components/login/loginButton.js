import React from 'react';
import axios from 'axios'; 


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
			<button className = "btn btn-primary" onClick = {this.handleSubmit}>Sign Up</button>
		);
	}
}

export default SignUp;