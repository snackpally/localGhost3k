import React, { Component } from 'react';
import { Collapse, Button, CardBody, Card } from 'reactstrap';
//import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'react-google-maps';

class Example extends Component {
  constructor(props) {
    super(props);
    this.marker = this.marker.bind(this);
    this.state = { collapse: false };
  }

  marker() {
    this.setState({ collapse: !this.state.collapse });
  }

  render() {
    return (
      <div>
        <Marker color="primary" onClick={this.marker} style={{ marginBottom: '1rem' }}></Marker>
        <Collapse isOpen={this.state.collapse}>
          <Card>
            <CardBody>
            Anim pariatur cliche reprehenderit,
             enim eiusmod high life accusamus terry richardson ad squid. Nihil
             anim keffiyeh helvetica, craft beer labore wes anderson cred
             nesciunt sapiente ea proident.
            </CardBody>
          </Card>
        </Collapse>
      </div>
    );
  }
}

export default Example;
