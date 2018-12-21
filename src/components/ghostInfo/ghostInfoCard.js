import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card, Media } from 'reactstrap';
import '.profile/component.css';
import Header from './components/navbar/HeaderNav';

export default class GhostInfo extends React.Component{
  render() {
    console.log('PROPS', this.props.data);
    return (
      <div>
        <Header />
          <h1>Test</h1>
          <Media left href="#">
            <Media object data-src="{this.props.data.loc_img}" alt="Collapse placeholder image" />
          </Media>
          <Media body>
            <Media heading>{this.props.data.place_name}</Media>
            <Media heading>{this.props.data.address.city}</Media>
            {this.props.data.loc_desc}
          </Media>
        </Media>
    );
  }
}
