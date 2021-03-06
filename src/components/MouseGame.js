import React from 'react'
import * as d3 from 'd3'

export class MouseGame extends React.Component {
  state = {
    data: [],
  }

  componentDidMount() {
    const svg = d3.select('svg').attr('width', 1100).attr('height', 700)

    svg
      .append('text')
      .text('draw on me')
      .attr('x', 300)
      .attr('y', 400)
      .attr('font-family', 'futura')
      .attr('font-size', 70)
      .attr('opacity', 0.1)

    setInterval(() => {
      const { data } = this.state
      if (data.length === 0) return
      const lastDotRemoved = [...data].slice(4)
      this.setState({ data: lastDotRemoved })
    }, 50)
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.data !== this.state.data) {
      this.drawCircles()
    }
  }
  addNode = (e) => {
    const { data } = this.state
    const newData = [
      ...data,
      { id: e.timeStamp, x: e.clientX - 240, y: e.clientY - 75 },
    ]
    this.setState({ data: newData })
  }

  drawCircles = () => {
    const { data } = this.state
    const circles = d3
      .select('svg')
      .selectAll('circle')
      .data(data, (d) => d.id)

    circles
      .enter()
      .append('circle')
      .attr('cx', (d) => d.x)
      .attr('cy', (d) => d.y)
      .attr('r', 3)
      .attr('fill', 'coral')
      .attr('opacity', 1)

    circles.exit().transition().duration(100).attr('opacity', 0).remove()
  }
  render() {
    return (
      <section className="splash-page">
        <h1 className="graph-title"> Mouse dot game</h1>
        <svg onMouseMove={this.addNode}></svg>
      </section>
    )
  }
}
