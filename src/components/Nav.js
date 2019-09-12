import React from 'react'
import * as d3 from 'd3'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

export class Nav extends React.Component {
  state = {}

  render() {
    return (
      <div className="side-nav">
        <Link className="nav-link" to="/">
          HOME
        </Link>
        <Link className="nav-link" to="/thindonut">
          THIN DONUT
        </Link>
        <Link className="nav-link" to="/force">
          FORCE
        </Link>
        <Link className="nav-link" to="/forcewithlinks">
          FORCE WITH LINKS
        </Link>
        <Link className="nav-link" to="/donut">
          DONUT
        </Link>
        <Link className="nav-link" to="/barchart">
          BARCHART
        </Link>
        <Link className="nav-link" to="/linechart">
          LINECHART
        </Link>
        <Link className="nav-link" to="/map">
          MAP
        </Link>
        <Link className="nav-link" to="/tree">
          TREE
        </Link>
        <Link className="nav-link" to="/matrix">
          MATRIX
        </Link>
      </div>
    )
  }
}
