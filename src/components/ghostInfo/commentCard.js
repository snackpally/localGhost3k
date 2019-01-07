import React from 'react';
import { Card, CardText, CardBody, CardSubtitle } from 'reactstrap';

export default class GhostComment extends React.Component {
  render() {
    console.log(this.props.data);
    return (
      <div className="cardWrapper">
        <Card>
          <CardBody>
            <CardSubtitle>HI</CardSubtitle>
            <CardText>HerE I am</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}
