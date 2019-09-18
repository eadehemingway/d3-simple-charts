import React from 'react'
import * as d3 from 'd3'

export class Voronoi extends React.Component {
  state = { data: [] }

  componentDidMount() {}

  render() {
    return (
      <section className="page-excl-nav">
        <h1 className="graph-title"> Voronoi </h1>
        <svg></svg>
      </section>
    )
  }
}
