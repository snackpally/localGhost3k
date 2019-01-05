import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import axios from 'axios';
import './contactus.css';

export default class Contactform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: '',
      email: '',
      comment: ''
    };
  }
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  validData = () => {
    const hasName = this.state.first_name.trim() !== '';
    const hasEmail = this.state.email.trim() !== '';
    const hasComment = this.state.comment.trim() !== '';
    return hasName && hasEmail && hasComment;
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.props);
    console.log(this.props.location.search);
    if (this.validData()) {
      console.log(this.state);
      const comments = this.state;
      axios
        .post('http://localhost:3001/contact/newContact', comments)
        .then(res => {
          console.log(res);
          alert('Your Comment has been recieved');
          window.location = '/';
        })
        .catch(err => {
          console.log(err);
        });
    }
  };
  render() {
    return (
      <div className="contactWrapper">
        <Form>
          <FormGroup>
            <Label for="first_name">First Name</Label>
            <Input type="text" name="first_name" placeholder="First Name" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email</Label>
            <Input type="email" name="email" placeholder="Email" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="comment">Comment</Label>
            <Input type="textarea" name="comment" placeholder="Let us know your thoughts" onChange={this.handleChange} />
          </FormGroup>
          <Button color="primary" block onClick={this.handleSubmit}>
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
