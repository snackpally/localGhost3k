import React from 'react';
import { Route, Switch } from 'react-router-dom';
import loginForm from '../components/login/loginForm';
import Landing from '../components/Landing/landing';
import signUpFrom from '../components/login/signUpForm';
import Collapseable from '../components/Collapseable';
// import Appliedroute from '../components/nonAPI/appliedroute';
import Header from '../components/navbar/HeaderNav';
class AppContainer extends React.Component {
  render() {
    return (
      <Switch>
        <div>
          <Header />
          <Route path="/Login" exact component={loginForm} />
          <Route path="/" exact component={Landing} />
          <Route path="/Register" exact component={signUpFrom} />
          <Route path={`/Collapseable/:id`} component={Collapseable} />
          {/* <PrivateRoute path="/protected" component={Protected} /> */}
          {/* <Route component={notFound} /> */}
        </div>
      </Switch>
    );
  }
}

export default AppContainer;
