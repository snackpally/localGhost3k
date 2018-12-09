import React from "react";
import ReactDOM from "react-dom";
import Login from "./components/login/login";
import UserForm from "./components/login/SignUp";

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        {/* <UserForm /> */}
        <Login />
      </div>
    );
  }
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));
