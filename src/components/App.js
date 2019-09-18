import React from 'react'
import * as d3 from 'd3'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import { ForceWithLinks } from './ForceWithLinks'
import { Force } from './Force'
import { Nav } from './Nav'
import { Home } from './Home'
import { Donut } from './Donut'
import { ThinDonut } from './ThinDonut'
import { BarChart } from './BarChart'
import { LineChart } from './LineChart'
import { TreeChart } from './TreeChart'
import { MapChart } from './MapChart/MapChart'
import { Matrix } from './Matrix'
import { Sankey } from './Sankey'
import { MouseGame } from './MouseGame'
import { Chord } from './Chord'
import { Voronoi } from './Voronoi'
import { RadarChart } from './RadarChart'
import { CirclePacking } from './CirclePacking'

export class App extends React.Component {
  state = {}

  render() {
    return (
      <BrowserRouter>
        <div className="page-contents">
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/thindonut" component={ThinDonut} />
            <Route exact path="/force" component={Force} />
            <Route exact path="/forcewithlinks" component={ForceWithLinks} />
            <Route exact path="/donut" component={Donut} />
            <Route exact path="/barchart" component={BarChart} />
            <Route exact path="/linechart" component={LineChart} />
            <Route exact path="/map" component={MapChart} />
            <Route exact path="/tree" component={TreeChart} />
            <Route exact path="/matrix" component={Matrix} />
            <Route exact path="/sankey" component={Sankey} />
            <Route exact path="/mousegame" component={MouseGame} />
            <Route exact path="/chord" component={Chord} />
            <Route exact path="/voronoi" component={Voronoi} />
            <Route exact path="/radar-chart" component={RadarChart} />
            <Route exact path="/circle-packing" component={CirclePacking} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}
