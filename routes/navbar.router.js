import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

BasicExample() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">Profile</Link>
          </li>
          <li>
            <Link to="/topics">Contacts</Link>
          </li>
        </ul>

        <hr />
        <h1>bloopblopbleep</h1>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={Profile} />
        <Route path="/topics" component={Contacts} />
        <Route path="/ghostInfoCard" component={Hauntings} />
      </div>
    </Router>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function Profile() {
  return (
    <div>
      <h2>Profile</h2>
    </div>
  );
}

function Profile({ match }) {
  return (
    <div>
      <h2>Favorite Hauntings</h2>
      <ul>
        <li>
          <Link to={`${match.url}/rendering`}>Rendering with React</Link>
        </li>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      <Route path={`${match.path}/:topicId`} component={Topic} />
      <Route
        exact
        path={match.path}
        render={() => <h3>Please select a topic.</h3>}
      />
    </div>
  );
}

function Topic({ match }) {
  return (
    <div>
      <h3>{match.params.topicId}</h3>
    </div>
  );
}

export default BasicExample;
