import React from 'react'
import * as d3 from 'd3'

export class Home extends React.Component {
  state = { data: [] }

  componentDidMount() {
    const data = d3.range(1000).map((n, i) => ({ id: i, num: n, radius: 4 }))
    d3.select('svg')
      .attr('width', 800)
      .attr('height', 600)

    this.setState({ data }, () => this.redraw())
  }

  redraw = () => {
    const { data } = this.state
    const centerOfGravity = { x: 350, y: 350 }
    const forceX = d3
      .forceX()
      .x(centerOfGravity.x)
      .strength(0.5)

    const forceY = d3
      .forceY()
      .y(centerOfGravity.y)
      .strength(0.5)
    const radius = 4

    const collision = d3.forceCollide(radius * 3).strength(0.1)

    const force = d3
      .forceSimulation(data)
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

    const svg = d3.select('svg')

    svg
      .selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('r', radius)
      .attr('class', 'bubble')
      .attr('fill', 'coral')
      .attr('opacity', '0')
    // .on('mouseover', function() {
    //   d3.select(this)
    //     .attr('r', '100px')
    //     .attr('fill', 'snow')
    // })
    // .on('mouseout', function(d) {
    //   d3.select(this)
    //     .attr('r', '0')
    //     .attr('fill', 'coral')
    // })

    d3.selectAll('.bubble')
      .transition()
      .duration(1500)
      .attr('opacity', '0.6')

    svg
      .append('text')
      .text('HOME')
      .attr('x', centerOfGravity.x)
      .attr('y', centerOfGravity.y)
      .attr('font-size', '70px')
      .attr('font-weight', 'bold')
      .attr('font-family', 'futura')
      .attr('fill', 'snow')
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')
  }

  render() {
    return (
      <section className="home-page">
        <svg></svg>
      </section>
    )
  }
}
