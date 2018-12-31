import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import './cardStyle.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class GhostCard extends React.Component {
  render() {
    return (
      <div>
        <Card className="card" inverse>
          <CardImg className="card-background-image" width="auto" src={this.props.data.loc_img_link} alt="Card image cap" />
          <CardImgOverlay className="cardSizing">
            <CardTitle className="CardTitle">{this.props.data.place_name}</CardTitle>
            <CardText className="cardCity">{this.props.data.address.city}</CardText>
            <CardText>
              <small href="#" className="text-muted">
                <Link to={'/ghostInfo/' + this.props.data._id}> Learn more </Link>
              </small>
            </CardText>
          </CardImgOverlay>
        </Card>
      </div>
    );
  }
}

//TODO get CardImgOverlay to fill the whole card that is being created.
