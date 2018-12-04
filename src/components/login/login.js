import React from 'react';  
import SignUp from './loginButton';

class UserForm extends React.Component {
	render() {
		return(
			<form>
				<div className="form-group">
					<label htmlFor="signUpUsername">Username</label>
					<input type="text" className="form-control" id="signUpUsername" aria-describedby="usernameHelp" placeholder="Enter Username"></input>
				</div>
				<div className="form-group">
					<label htmlFor="inputEmail">Email Address</label>
					<input type="email" className="form-control" id="inputEmail" aria-describedby="emailHelp" placeholder="Enter email"></input>
					<small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
				</div>
				<SignUp />
			</form>
		)
	}
}

export default UserForm;