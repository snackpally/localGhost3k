import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
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

  toggle = () => {
    this.setState({ collapse: !this.state.collapse });
  };

  componentWillReceiveProps() {
    this.setState({ collapse: true });
  }

  componentDidMount() {
    console.log('hit');
    this.setState({ collapse: true });
  }

  limitString = (str, len, ending) => {
    if (len == null) {
      len = 500;
    }
    if (ending == null) {
      ending = '...';
    }
    if (str.length > len) {
      return str.substring(0, len - ending.length) + ending;
    } else {
      return str;
    }
  };

  render() {
    console.log('PROPS', this.props.data);
    return (
      <div id="ghostCollapse" className="col text-center">
        <Collapse isOpen={this.state.collapse} toggle={this.markers} className={this.props.className} className="Collapse">
          <Button
            className="collapseClose"
            toggle={this.button}
            onClick={() => {
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
              <Media className="collapseLocDesc">{this.limitString(this.props.data.loc_desc)}</Media>
              <Button outline className="collapseLearnMore" color="info" size="sm" tag={Link} to={'/ghostInfo/' + this.props.data._id}>
                Learn More...
              </Button>
              {''}
            </Media>
          </Media>
        </Collapse>
      </div>
    );
  }
}
