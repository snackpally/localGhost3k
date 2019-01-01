import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
// import '.profile/component.css';
//import Header from './components/navbar/HeaderNav';

// function getGhostData(id) {
//   return fetch(`${http://localhost:3001/location/detail}/${id}`).then(res => res.json());
// }
//
// export default class GhostInfo extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isLoading: true,
//       ghostData: {}
//     };
//   }
// componentDidMount() {
//   console.log(this.props.match.params.id);
//   const { id } = this.props.match.params;
//   getGhostData(id)
//     .then(ghostData => {
//       setTimeout(() => {
//         this.setState({
//           product,
//           isLoading: false
//         });
//       }, 1000);
//     });
//   }


//   render() {
//     console.log('PROPS', this.props);
//
//     return (
//       <div>
//         <Media>
//           <Media left href="#">
//             <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
//           </Media>
//           <Media body>
//             <Media heading>Media heading</Media>
//             Cras sit amet nibh libero, in gravida nulla.
//             <h1> {this.props.match.params.place_name}</h1>
//           </Media>
//         </Media>
//       </div>
//     );
//   }
// }
