import React, { Component } from 'react';
import { Media } from 'reactstrap';
// import '.profile/component.css';
// import Header from './components/navbar/HeaderNav';

export default class GhostInfo extends React.Component{
  constructor(props){
    super(props);
  }
  render() {
    console.log('PROPS', this.props);

    return (
      <div>
        <Media>
          <Media left href="#">
            <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
          </Media>
          <Media body>
            <Media heading>
              Media heading
            </Media>
              Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </Media>
        </Media>
      </div>
    );
  }
}
