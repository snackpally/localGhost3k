import React from "react";
import ReactDOM from "react-dom";

import UserForm from "./components/login/SignUp";

class HelloWorld extends React.Component {
  render() {
    return (
      <div>
        <UserForm />
      </div>
    );
  }
}

ReactDOM.render(<HelloWorld />, document.getElementById("root"));
