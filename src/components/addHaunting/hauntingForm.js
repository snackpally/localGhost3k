import React from 'react';
import {  Col, Row, Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

export default class HauntingForm extends React.Component {
  state = {
    data: {},
  };

valueChanged = (event) => {
  const {name, value} = event.target;
  this.setState((prevState) => ({
    data:  {
      ...prevState.data,
      [name]: value
    }
  }));
};

validData = () => {
  const { data } = this.state;
  const hasLocationName = data.hauntedLocationName.trim() !== '';
  const hasCoordinates = !isNaN(data.coordinates);
  const hasDescription = data.description.trim() !== '';
  const hasImage = data.image.trim() !== '';
  const hasAddress = data.address.trim() !== '';
  const hasCity = data.city.trim() !== '';
  const hasState = data.state.trim() !== '';
  const hasSource = data.source.trim() !== '';

  return hasLocationName && hasCoordinates && hasDescription && hasImage && hasAddress && hasCity && hasState;

}

formSubmitted = (event) => {
  event.preventDefault();
  console.log(this.state.product);
  if (this.validData()) {
    console.log(this.state.product);
    this.props.onFormSubmitted(this.state.data)

  }
};

  render() {
    return (
      <div className="hauntingForm">
        <Form onSubmit={this.formSubmitted}>
          <FormGroup>
            <Label htmlFor="title">Add Your Haunted Location</Label>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="exampleEmail">Name of Haunted Location</Label>
              <Input onChange={this.valueChanged} className="hauntedLocationName"
              name="hauntedLocationName"
              placeholder="Enter name of haunted location" required
              />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="coordinates">GPS coordinates of haunted location</Label>
              <Input onChange={this.valueChanged} className="coordinates" name="coordinates"
              placeholder="Enter latitude, longitude" required
              />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="description">History and Description of Haunting</Label>
              <Input onChange={this.valueChanged} className="description" type="textarea" name="description" id="exampleText" required/>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="exampleUrl">Image of Haunting Location</Label>
              <Input onChange={this.valueChanged}
              className="locationImage"
              type="url"
              name="image"
              id="exampleUrl"
              placeholder="http://example.com/image.jpg"
              required
              />
          </FormGroup>
       <FormGroup>
         <Label htmlFor="exampleAddress">Address of haunted location</Label>
         <Input onChange={this.valueChanged} className="address" type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
       </FormGroup>
       <Row form>
         <Col md={6}>
           <FormGroup>
             <Label htmlFor="exampleCity">City</Label>
             <Input onChange={this.valueChanged} type="text" className="city" name="city" id="exampleCity"/>
           </FormGroup>
         </Col>
         <Col md={4}>
           <FormGroup>
             <Label htmlFor="state">State</Label>
             <Input onChange={this.valueChanged} type="text" name="state" id="state"/>
           </FormGroup>
         </Col>
         </Row>
          <FormGroup>
            <Label htmlFor="exampleEmail">Source of Information</Label>
            <Input onChange={this.valueChanged}
            name="source" className="source"
            placeholder="Enter source"
            />
          </FormGroup>
           <Button>Submit</Button>
        </Form>
      </div>
  );
}
}
