import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class HauntingForm extends React.Component {
  state = {
    hauntedLocationName: '',
    coordinates: [''],
    description: '',
    image: '',
    address: '',
    city: '',
    state: '',
    source: ''
  };

  // valueChanged = event => {
  //   const { name, value } = event.target;
  //   this.setState(prevState => ({
  //     data: {
  //       ...prevState.data,
  //       [name]: value
  //     }
  //   }));
  // };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  validData = () => {
    const hasLocationName = this.state.hauntedLocationName.trim() !== '';
    const hasCoordinates = !isNaN(this.state.coordinates);
    const hasDescription = this.state.description.trim() !== '';
    const hasImage = this.state.image.trim() !== '';
    const hasAddress = this.state.address.trim() !== '';
    const hasCity = this.state.city.trim() !== '';
    const hasState = this.state.state.trim() !== '';
    const hasSource = this.state.source.trim() !== '';

    return hasLocationName && hasCoordinates && hasDescription && hasImage && hasAddress && hasCity && hasState;
  };

  formSubmitted = event => {
    event.preventDefault();
    console.log(this.state);
    if (this.validData()) {
      console.log(this.state);
      this.props.onFormSubmitted(this.state);
    }
  };

  render() {
    return (
      <div className="hauntingForm">
        <Form onSubmit={this.formSubmitted}>
          <FormGroup>
            <Label htmlFor="title">Add Your Haunted Location:</Label>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="exampleEmail">Name of haunted location:</Label>
            <Input onChange={this.handleChange} className="hauntedLocationName" name="hauntedLocationName" placeholder="Enter name of haunted location" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="title">GPS coordinates of haunted location: </Label>
          </FormGroup>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Input onChange={this.handleChange} type="text" className="city" name="latitude" id="exampleCity" placeholder="latitude" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Input onChange={this.handleChange} type="text" name="longitude" id="longitude" placeholder="longitude" />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label htmlFor="description">History and description of haunting:</Label>
            <Input onChange={this.handleChange} className="description" type="textarea" name="description" id="exampleText" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="exampleUrl">Image of haunting location:</Label>
            <Input onChange={this.handleChange} className="locationImage" type="url" name="image" id="exampleUrl" placeholder="http://example.com/image.jpg" required />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="exampleAddress">Address of haunted location:</Label>
            <Input onChange={this.handleChange} className="address" type="text" name="address" id="exampleAddress" placeholder="example: 1234 Main St" />
          </FormGroup>
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label htmlFor="exampleCity">City:</Label>
                <Input onChange={this.handleChange} type="text" className="city" name="city" id="exampleCity" />
              </FormGroup>
            </Col>
            <Col md={4}>
              <FormGroup>
                <Label htmlFor="state">State:</Label>
                <Input onChange={this.handleChange} type="text" name="state" id="state" />
              </FormGroup>
            </Col>
          </Row>
          <FormGroup>
            <Label htmlFor="exampleEmail">Source of information:</Label>
            <Input onChange={this.handleChange} name="source" className="source" placeholder="Enter source" />
          </FormGroup>
          <Button>Submit</Button>
        </Form>
      </div>
    );
  }
}
