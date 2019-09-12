import React from 'react'
import * as d3 from 'd3'

export class Home extends React.Component {
  state = { data: [] }

  componentDidMount() {
    const fiveThousand = d3.range(1000).map((n, i) => ({ id: i, num: n }))
    d3.select('svg')
      .attr('width', 800)
      .attr('height', 700)

    this.setState({ data: fiveThousand })

    setTimeout(() => this.redraw(), 50) // adding a timeout so that the page loads with something while waiting for the d3
  }

  redraw = () => {
    const { data } = this.state
    const forceX = d3
      .forceX()
      .x(350)
      .strength(0.5)

    const forceY = d3
      .forceY()
      .y(350)
      .strength(0.5)

    const collision = d3.forceCollide(12).strength(0.1)

    d3.forceSimulation(data)
      .force('collision', collision)
      .force('x', forceX)
      .force('y', forceY)
      .alpha(0.01) // small alpha to have the elements move at a slower pace
      .alphaDecay(0)
      // .tick(800) // this makes it appear in the middle immediately ...
      .on('tick', () => {
        // call the tick function running the simulation
        d3.selectAll('.bubble').attr(
          'transform',
          d => `translate(${d.x} ${d.y})`
        )
      })

    const svg = d3.select('svg')

    svg
      .selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('r', 4)
      .attr('class', 'bubble')
      .attr('fill', 'coral')
      .attr('opacity', '0')

    d3.selectAll('.bubble')
      .transition()
      .attr('opacity', '0.6')

    svg
      .append('text')
      .text('HOME')
      .attr('x', 350)
      .attr('y', 350)
      .attr('font-size', '70px')
      .attr('font-weight', 'bold')
      .attr('font-family', 'sans-serif')
      .attr('fill', 'snow')
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
  }

  render() {
    return (
      <section>
        <svg></svg>
      </section>
    )
  }
}
