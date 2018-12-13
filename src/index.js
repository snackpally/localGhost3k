import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/navbar/HeaderNav';
import { BrowserRouter as Router } from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);

// A few of these divs are redundent and are overriding the css rules already being called with bootstrap.
//I commented them the out and we can work on the alignment from there.
//Just a thought.
