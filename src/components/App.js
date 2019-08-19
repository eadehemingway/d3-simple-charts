import React from 'react';
import * as d3 from 'd3';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import { ForceWithLinks } from './ForceWithLinks'
import { Force } from './Force'
import { Nav } from './Nav'
import { Home } from './Home'
import { Donut } from './Donut'
import { ThinDonut } from './ThinDonut';

export class App extends React.Component {
  state = {

  };

  render() {
    return (
      <BrowserRouter>
        <div className="page-contents">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/pie" component={ThinDonut} />
            <Route exact path="/force" component={Force} />
            <Route exact path="/forcewithlinks" component={ForceWithLinks} />
            <Route exact path="/donut" component={Donut} />

          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
