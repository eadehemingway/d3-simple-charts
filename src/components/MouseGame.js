import React from 'react'
import * as d3 from 'd3'

export class MouseGame extends React.Component {
  state = {
    data: []
  }

  componentDidMount() {
    d3.select('svg')
      .attr('width', 500)
      .attr('height', 500)

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
  addNode = e => {
    const { data } = this.state
    const newData = [
      ...data,
      { id: e.timeStamp, x: e.clientX - 350, y: e.clientY - 150 }
    ]
    this.setState({ data: newData })
  }

  drawCircles = () => {
    const { data } = this.state
    const circles = d3
      .select('svg')
      .selectAll('circle')
      .data(data, d => d.id)

    circles
      .enter()
      .append('circle')
      .attr('cx', d => d.x)
      .attr('cy', d => d.y)
      .attr('r', 3)
      .attr('fill', 'red')
      .attr('opacity', 1)

    circles
      .exit()
      .transition()
      .duration(100)
      .attr('opacity', 0)
      .remove()
  }
  render() {
    return (
      <section className="page-excl-nav">
        <h1 className="graph-title"> Mouse dot game</h1>
        <svg onMouseMove={this.addNode}></svg>
      </section>
    )
  }
}
