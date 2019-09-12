import React from 'react'
import * as d3 from 'd3'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

export class Home extends React.Component {
  state = { data: [] }

  componentDidMount() {
    const fiveThousand = d3.range(0, 1000).map((n, i) => ({ id: i, num: n }))

    this.setState({ data: fiveThousand }, () => {
      const svg = d3
        .select('svg')
        .attr('width', 2000)
        .attr('height', 2000)

      svg
        .selectAll('circle')
        .data(fiveThousand)
        .enter()
        .append('circle')
        .attr('r', 4)
        .attr('class', 'bubble')
        .attr('fill', 'red')

      this.createSimulation()
    })
  }

  createSimulation = () => {
    const { data } = this.state

    const forceX = d3
      .forceX()
      .x(350)
      .strength(0.5)

    const forceY = d3
      .forceY()
      .y(300)
      .strength(0.5)

    const collision = d3.forceCollide(12).strength(0.1)

    d3.forceSimulation(data)
      .force('collision', collision)
      .force('x', forceX)
      .force('y', forceY)
      .alpha(0.01) // small alpha to have the elements move at a slower pace
      .alphaDecay(0)
      .on('tick', () => {
        // call the tick function running the simulation
        d3.selectAll('.bubble').attr(
          'transform',
          d => `translate(${d.x} ${d.y})`
        )
      })
  }

  render() {
    return (
      <section>
        <h1 className="graph-title"> HOME</h1>
        <svg></svg>
      </section>
    )
  }
}
