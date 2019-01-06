import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import './hauntingform.css';

export default class HauntingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      place_name: '',
      loc: {
        coordinates: [],
        type: 'Point'
      },
      loc_desc: '',
      loc_img_link: '',
      address: {
        street: '',
        city: '',
        state: ''
      },
      source: ''
    };
  }

  // TODO Switch Statement
  handleChange = event => {
    if (event.target.name == 'latitude') {
      this.setState({ loc: { ...this.state.loc, coordinates: [Number(event.target.value), this.state.loc.coordinates[1]] } });
    } else if (event.target.name == 'longitude') {
      this.setState({ loc: { ...this.state.loc, coordinates: [this.state.loc.coordinates[0], Number(event.target.value)] } });
    } else if (event.target.name == 'street') {
      this.setState({ address: { ...this.state.address, street: [event.target.value] } });
    } else if (event.target.name == 'city') {
      this.setState({ address: { ...this.state.address, city: [event.target.value] } });
    } else if (event.target.name == 'state') {
      this.setState({ address: { ...this.state.address, state: [event.target.value] } });
    } else {
      this.setState({ [event.target.name]: event.target.value });
    }
  };

  // validData = () => {
  //   const hasLocationName = this.state.place_name.trim() !== '';
  //   const hasCoordinates = !isNaN(this.state.loc.coordinates);
  //   const hasDescription = this.state.loc_desc.trim() !== '';
  //   const hasImage = this.state.loc_img_link.trim() !== '';
  //   const hasAddress = this.state.address.trim() !== '';
  //   const hasCity = this.state.city.trim() !== '';
  //   const hasState = this.state.state.trim() !== '';
  //   const hasSource = this.state.source.trim() !== '';

  //   return hasLocationName && hasCoordinates && hasDescription && hasImage && hasAddress && hasCity && hasState;
  // };

  formSubmitted = event => {
    event.preventDefault();
    console.log(this.state);
    // if (this.validData()) {
    let ghosty = this.state;
    console.log('TO SEND', ghosty);
    axios
      .post('http://localhost:3001/location/create', ghosty)
      .then(res => {
        console.log(res);
        alert("You've added a haunting!");
        window.location = '/';
      })
      .catch(err => {
        console.log(err);
      });
    // this.props.onFormSubmitted(this.state);
    // }
  };

  render() {
    return (
      <div className="hauntedLocations">
        <h2 className="AddYourHauntedLocation">Add Your Haunted Location</h2>
        <Form className="hauntingForm">
          <FormGroup>
            <Label for="place_name">Name of haunted location:</Label>
            <Input onChange={this.handleChange} className="hauntedLocationName" name="place_name" placeholder="Enter name of haunted location" required />
          </FormGroup>
          <FormGroup>
            <Label for="title">GPS coordinates of haunted location: </Label>
          </FormGroup>
          <Row form>
            <Col md={8}>
              <FormGroup>
                <Input onChange={this.handleChange} type="text" className="latitude" name="latitude" id="exampleCity" placeholder="latitude" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Input onChange={this.handleChange} type="text" name="longitude" id="longitude" placeholder="longitude" />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="description">History and description of haunting:</Label>
            <Input onChange={this.handleChange} className="description" type="textarea" name="loc_desc" id="exampleText" required />
          </FormGroup>
          <FormGroup>
            <Label for="exampleUrl">Image of haunting location:</Label>
            <Input onChange={this.handleChange} className="locationImage" type="url" name="loc_img_link" id="exampleUrl" placeholder="http://example_image.jpg" required />
          </FormGroup>
          <FormGroup>
            <Label for="exampleAddress">Address of haunted location:</Label>
            <Input onChange={this.handleChange} className="address" type="text" name="street" id="exampleAddress" placeholder="example: 1234 Main St" />
          </FormGroup>
          <Row form>
            <Col md={8}>
              <FormGroup>
                <Label for="exampleCity">City:</Label>
                <Input onChange={this.handleChange} type="text" className="city" name="city" id="exampleCity" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label for="state">State:</Label>
                <Input onChange={this.handleChange} type="text" name="state" id="state" />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label for="exampleEmail">Source of information:</Label>
            <Input onChange={this.handleChange} name="source" className="source" placeholder="Enter source" />
          </FormGroup>
          <Button onClick={this.formSubmitted}>Submit</Button>
        </Form>
      </div>
    );
  }
}
