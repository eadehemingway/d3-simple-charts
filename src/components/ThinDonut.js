import React from 'react'
import * as d3 from 'd3'

export class ThinDonut extends React.Component {
  state = {
    data: [],
  }

  componentDidMount() {
    this.setState({ data: this.makeData(20) })
    this.interval = setInterval(
      () => this.setState({ data: this.makeData(20) }),
      1500
    )

    const svgWidth = 900
    const svgHeight = 500
    const svg = d3
      .select('svg')
      .attr('width', svgWidth)
      .attr('height', svgHeight)

    svg
      .append('g')
      .attr(
        'transform',
        'translate(' + svgWidth / 2 + ',' + svgHeight / 2 + ')'
      )
      .attr('class', 'donutContainer')

    this.drawDonut()
  }

  componentDidUpdate() {
    this.drawDonut()
  }

  drawDonut = () => {
    const { data } = this.state

    const arc = d3.arc().outerRadius(200).innerRadius(180)

    const pie = d3
      .pie()
      .value((d) => d)
      .sort(null)

    const donutContainer = d3.select('.donutContainer')
    const arcSelection = donutContainer.selectAll('path').data(pie(data))

    const enterSelection = donutContainer
      .selectAll('path')
      .data(pie(data))
      .enter()
      .append('path')
      .attr('fill', 'snow')
      .attr('stroke', 'coral')
      .attr('stroke-width', '1px')

    const updateSelection = enterSelection.merge(arcSelection)

    updateSelection
      .transition()
      .duration(1500)
      .attrTween('d', function (d) {
        const prevData = this._prevData || 0
        const i = d3.interpolate(prevData, d)
        this._prevData = d
        return (t) => arc(i(t))
      })
  }
  makeData = (size) => {
    return d3.range(size).map(() => Math.random() * 100)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }
  render() {
    return (
      <section className="page-excl-nav">
        <h1 className="graph-title"> Thin donut</h1>
        <svg />
      </section>
    )
  }
}
