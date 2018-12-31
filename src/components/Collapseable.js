import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Collapse, Button, CardBody, Card, Media } from 'reactstrap';
import './component.css';

export default class Collapseable extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      collapse: false
    };
  }

  toggle = e => {
    this.setState({ collapse: !this.state.collapse });
  };

  componentWillReceiveProps() {
    this.setState({ collapse: true });
  }

  componentDidMount() {
    console.log('hit');
    this.setState({ collapse: true });
  }

  render() {
    console.log('PROPS', this.props.data);
    return (
      <div>
        <Collapse isOpen={this.state.collapse} toggle={this.markers} className={this.props.className} className="Collapse">
          <Button
            className="collapseClose"
            toggle={this.button}
            onClick={e => {
              this.toggle(this.props.data);
            }}
            close
          />
          <Media>
            <Media left href="#">
              <Media object className="collapseImg" src={this.props.data.loc_img_link} alt="Collapse placeholder image" />
            </Media>
            <Media body className="blurred-box">
              <Media heading className="collapsePlaceName">
                {this.props.data.place_name}
              </Media>
              <Media>
                <h5 className="collapseCity">{this.props.data.address.city}</h5>
              </Media>
              <Media className="collapseLocDesc">{this.props.data.loc_desc}</Media>
              <Button outline className="collapseLearnMore" color="primary" size="sm" tag={Link} to={"/ghostInfo/"+this.props.data._id}>
                 Learn More...
              </Button>
              {''}
            </Media>
          </Media>
          <Button className="profileButton" color="danger" size="sm">
            Add to Profile
          </Button>
          {}
        </Collapse>
      </div>
    );
  }
}
//<Button tag={Link} to="/somewhere" / or wrap the button in a link '/ghostInfo + this.props.data._id'
