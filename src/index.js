import React from "react";
import ReactDOM from "react-dom";
import UserForm from "./components/login/SignUp";
import Navbar from "./components/navbar/nav1";
class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <UserForm />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
