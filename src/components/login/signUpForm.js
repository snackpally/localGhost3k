import React from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './signup.css';
class SignUpForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      password2: '',
      email: '',
      first_name: '',
      last_name: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  handleSubmit() {
    let sendUser = {
      username: this.state.username,
      password: this.state.password,
      password2: this.state.password2,
      email: this.state.email,
      first_name: this.state.first_name,
      last_name: this.state.last_name
    };
    console.log(sendUser);
    axios
      .post('http://localhost:3001/user/register', sendUser)
      .then(function(res) {
        console.log(res);
        console.log(res.data);
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="Signup">
        <h1>Sign up for Local Ghost</h1>
        <h3>Unlocks access to saved tours and locations</h3>
        <Form>
          <FormGroup>
            <Label for="username">Username</Label>
            <Input type="text" name="username" placeholder="Enter Username" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
            <Input type="password" name="password" placeholder="Enter Password" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="password1">Re-enter password</Label>
            <Input type="password" name="password2" placeholder="Re-enter Password" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="email">Email Address</Label>
            <Input type="email" name="email" placeholder="Enter your email" onChange={this.handleChange} />
            <FormText color="muted">We will never share your email with anyone else</FormText>
          </FormGroup>
          <FormGroup>
            <Label for="firstname">First Name</Label>
            <Input type="text" name="first_name" placeholder="First Name" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="lastname">Last Name</Label>
            <Input type="text" name="last_name" placeholder="Last Name" onChange={this.handleChange} />
          </FormGroup>
          <Button color="primary" block onClick={this.handleSubmit}>
            Sign Up
          </Button>
        </Form>
      </div>
    );
  }
}

export default SignUpForm;
