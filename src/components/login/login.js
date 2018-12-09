import React from "react";
import axios from "axios";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      enterSubmit: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  _handleKeyPress = e => {
    if (e.key === "Enter") {
      this.setState({ enterSubmit: true });
      console.log("do validate");
    }
  };
  //TODO submit on enter

  handleSubmit() {
    let login = {
      username: this.state.username,
      password: this.state.password,
    };
    axios
      .post("http://localhost:3001/user/login", login)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
    //TODO redirect to User page on success
  }
  render() {
    return (
      <div>
        <h1>Log In</h1>
        <form>
          <div className=" form-group">
            <label htmlFor="loginUsername">Username</label>
            <input
              type="text"
              name="username"
              className="form-control"
              id="loginUsername"
              aria-describedby="loginusernameHelp"
              placeholder="Enter Username"
              onChange={this.handleChange}
            />
          </div>
          <div className=" form-group">
            <label htmlFor="loginPassword">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="loginPassword"
              aria-describedby="loginPasswordHelp"
              placeholder="Enter Password"
              onChange={this.handleChange}
              onKeyPress={this._handleKeyPress}
            />
          </div>
        </form>
        <button className="btn btn-primary" onClick={this.handleSubmit}>
          Sign Up
        </button>
      </div>
    );
  }
}

export default Login;
