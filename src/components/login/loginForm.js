import React from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './login.css';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      redirectToReferrer: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }
  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  clearForm() {
    this.setState({ username: '', password: '' });
  }
  handleLogin(e) {
    e.preventDefault();
    let login = {
      username: this.state.username,
      password: this.state.password
    };
    axios
      .post('http://localhost:3001/user/login', login)
      .then(res => {
        console.log(res);
        console.log(res.data);
        alert('Logged in as ' + res.data.username);
        this.setState({ redirectToReferrer: true });
        this.clearForm();
      })
      .catch(err => {
        console.log(err);
        alert('Could not log-in...');
      });
    //TODO redirect to User page on success
  }
  render() {
    return (
      <div className="loginWrapper">
        <Form>
          <FormGroup>
            <Label for="loginUsername">Username</Label>
            <Input type="text" name="username" placeholder="Enter Username" onChange={this.handleChange} />
          </FormGroup>
          <FormGroup>
            <Label for="loginPassword">Password</Label>
            <Input type="password" name="password" placeholder="Enter Password" onChange={this.handleChange} />
          </FormGroup>
          <Button color="primary" onClick={this.handleLogin} block>
            Log In
          </Button>
          <Button color="secondary" block>
            Sign Up
          </Button>
        </Form>
      </div>
    );
  }
}

export default LoginForm;
