import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Landing from '../components/Landing/landing';
import GhostInfoCard from '../components/ghostInfo/ghostInfoCard';
import Collapseable from '../components/Collapseable';
import hauntingForm from '../components/addHaunting/hauntingForm';
import Contactform from '../components/contact/contactus';
import Header from '../components/navbar/HeaderNav';
class AppContainer extends React.Component {
  render() {
    return (
      <Switch>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route path="/addHaunting" component={hauntingForm} />
          <Route path={`/Collapseable/:id`} component={Collapseable} />
          <Route path={`/ghostInfo/:id`} component={GhostInfoCard} />
          <Route path="/contact" exact component={Contactform} />
        </div>
      </Switch>
    );
  }
}

export default AppContainer;
