import React from 'react';
import ReactDOM from 'react-dom';
import Greeting from './greeting';
<<<<<<< HEAD
// import MapContainer from './googleMap';
import OtherLayersExample from './leafletMap.js'
=======
import UserForm from './components/login/login';

>>>>>>> 7f1b4b4efca9eaead4199bc1e2ea4ecf81cbfdd6
class HelloWorld extends React.Component {
	render() {
		return (
			<div>
				<h1>Hello and Welcome to Local Ghost</h1>
				<Greeting />
<<<<<<< HEAD

			<div>
				<h1>Ghost Map Attempt</h1>
				<OtherLayersExample />
			</div>
		</div>
=======
				<UserForm />
			</div>
			
>>>>>>> 7f1b4b4efca9eaead4199bc1e2ea4ecf81cbfdd6
		)
	}
}

ReactDOM.render(
	<HelloWorld />,
	document.getElementById('root')
);
