import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Main from './main';

import STAND11D02 from './components/models/standardboxes/stand-11d02';

import TUCKENDBOXES from './components/models/tuckendboxes/tuck-end-boxes';
import TUCKCENTBOXES from './components/models/tuckcentboxes/tuck-end-center-boxes';

import CREAMSINGLELOCK from './components/models/creamsinglelock/cream-single-lock';

import SHOPPINGBAGS from './components/models/shoppingbags/shopping-bags';

import SLIDEBOXES from './components/models/slideboxes/slide-boxes';

import SNAPBOXES from './components/models/snapboxes/snap-boxes';

import SNAPLOCKBOXES from './components/models/snaplockboxes/snaplockboxes';

import GLOVEBOXES from './components/models/gloveboxes/gloveboxs';

import FOODBOX12001 from './components/models/foodboxes/food-12001/food-12001';
import FOODBOX12007 from './components/models/foodboxes/food-12007/food-12007';
import FOODBOX12009 from './components/models/foodboxes/food-12009/food-12009';

import TRAYBOX11A05 from './components/models/trayboxes/tray-11a05/tray-11a05';
import TRAYBOX11701 from './components/models/trayboxes/tray-11701/tray-11701';
import TRAYBOX21701 from './components/models/trayboxes/tray-21701/tray-21701';
import TRAYBOX21B02 from './components/models/trayboxes/tray-21b02/tray-21b02';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Main />
        </Route>
        <Route exact path="/stand11d02">
          <STAND11D02 />
        </Route>
        <Route exact path="/tuckendboxes">
          <TUCKENDBOXES />
        </Route>
        <Route exact path="/tuckcentboxes">
          <TUCKCENTBOXES />
        </Route>
        <Route exact path="/creamsinglelock">
          <CREAMSINGLELOCK />
        </Route>
        <Route exact path="/shoppingbags">
          <SHOPPINGBAGS />
        </Route>
        <Route exact path="/slideboxes">
          <SLIDEBOXES />
        </Route>
        <Route exact path="/gloveboxes">
          <GLOVEBOXES />
        </Route>
        <Route exact path="/food12001">
          <FOODBOX12001 />
        </Route>
        <Route exact path="/food12007">
          <FOODBOX12007 />
        </Route>
        <Route exact path="/food12009">
          <FOODBOX12009 />
        </Route>
        <Route exact path="/tray11a05">
          <TRAYBOX11A05 />
        </Route>
        <Route exact path="/tray11701">
          <TRAYBOX11701 />
        </Route>
        <Route exact path="/tray21701">
          <TRAYBOX21701 />
        </Route>
        <Route exact path="/tray21b02">
          <TRAYBOX21B02 />
        </Route>
        <Route exact path="/snapboxes">
          <SNAPBOXES />
        </Route>
        <Route exact path="/snaplockboxes">
          <SNAPLOCKBOXES />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
