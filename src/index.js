<<<<<<< HEAD
import React from "react";
import ReactDOM from "react-dom";
import UserForm from "./components/login/SignUp";
import Navbar from "./components/navbar/nav1";
class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <UserForm />
      </div>
    );
  }
=======
import React from 'react';
import ReactDOM from 'react-dom';
import Navbar from './components/navbar/nav1';
import Profile from './components/profile/profile'
class App extends React.Component {
	render() {
		return (
			<div>
			<Navbar />
			<Profile />
			</div>

		)
	}
>>>>>>> jamie/frontend/profile
}

ReactDOM.render(<App />, document.getElementById("root"));
