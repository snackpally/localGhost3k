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
}

ReactDOM.render(
	<App />,
	document.getElementById('root')
);
