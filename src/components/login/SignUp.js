import React from "react";
import axios from "axios";

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      password2: "",
      email: "",
      first_name: "",
      last_name: ""
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
      .post("http://localhost:3001/user/register", sendUser)
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
      <div>
        <h1>Sign up for Local Ghost</h1>
        <form>
          <div className="form-group">
            <label htmlFor="signUpUsername">Username</label>
            <input
              type="text"
              name="username"
              className="form-control"
              id="signUpUsername"
              aria-describedby="usernameHelp"
              placeholder="Enter Username"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="signUpPassword">Password</label>
            <input
              type="text"
              name="password"
              className="form-control"
              id="password"
              aria-describedby="passwordHelp"
              placeholder="Enter Password"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="signUpPassword1">Re-enter password</label>
            <input
              type="text"
              name="password2"
              className="form-control"
              id="signUpPassword2"
              aria-describedby="password1Help"
              placeholder="Re-enter password"
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="signUpEmail">Email Address</label>
            <input type="email" name="email" className="form-control" id="signUpEmail" aria-describedby="emailHelp" placeholder="Enter email" onChange={this.handleChange} />
            <small id="emailHelp" className="form-text text-muted">
              We will never share your email with anyone else.
            </small>
            <div className="form-group">
              <label htmlFor="signUpFirstName">First Name</label>
              <input
                type="text"
                name="first_name"
                className="form-control"
                id="signUpfirstName"
                aria-describedby="firstNameHelp"
                placeholder="First Name"
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="signUplastName">Last Name</label>
              <input
                type="text"
                name="last_name"
                className="form-control"
                id="signUplastName"
                aria-describedby="lastNameHelp"
                placeholder="Last Name"
                onChange={this.handleChange}
              />
            </div>
          </div>
        </form>
        <button className="btn btn-primary" onClick={this.handleSubmit}>
          Sign Up
        </button>
      </div>
    );
  }
}

export default UserForm;
