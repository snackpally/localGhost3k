import React from 'react';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay } from 'reactstrap';
import './cardStyle.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class GhostCard extends React.Component {
  render() {
    return (
      <div className=" row row-eq-height">
        <Card  className="card" tag={Link} to={'/ghostInfo/' + this.props.data._id} inverse>
          <CardImg row row-eq-height className="card-background-image" width="auto" height="100%" src={this.props.data.loc_img_link} alt="Card image cap" />
          <CardImgOverlay row row-eq-height className="cardSizing">
            <CardText className="CardText">
              <h3 row row-eq-height className="cardTitle">{this.props.data.place_name}</h3>
            <h4 row row-eq-height className="cardCity">{this.props.data.address.city}</h4>
            <h5 row row-eq-height className="LearnMore">
                Learn more...</h5>
            </CardText>
          </CardImgOverlay>
        </Card>
      </div>
    );
  }
}
