import React from 'react'
import * as d3 from 'd3'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { Nav } from './Nav'
import { Home } from './Home'
import { chartList } from './ChartList'

export class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="page-contents">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            {chartList.map((c) => (
              <Route path={c.endpoint} component={c.component} />
            ))}
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
