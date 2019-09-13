import React from 'react'
import * as d3 from 'd3'

export class Donut extends React.Component {
  state = {
    data: [
      { name: 'USA', value: 40 },
      { name: 'UK', value: 20 },
      { name: 'France', value: 30 },
      { name: 'Hungry', value: 10 },
      { name: 'Latvia', value: 14 },
      { name: 'Turkey', value: 16 },
      { name: 'Spain', value: 20 }
    ],
    padAngle: 0
  }

  componentDidMount() {
    const { data } = this.state

    const chart_width = Math.max(window.innerWidth - 600, 500)
    const chart_height = 500

    const svg = d3
      .select('svg')
      .attr('class', 'pie')
      .attr('width', chart_width)
      .attr('height', chart_height)

    const donutGroup = svg
      .append('g')
      .attr('transform', 'translate(' + 300 + ',' + chart_height / 2 + ')')

    donutGroup
      .append('text')
      .attr('text-anchor', 'middle')
      .attr('font-family', 'futura')
      .attr('fill', 'lightslategray')

    const arc = d3
      .arc()
      .innerRadius(80)
      .outerRadius(150)

    const pie = d3
      .pie()
      .padAngle(0.05)
      .sort(null) // need this so that it loads in order
      .value(d => d.value)
    const dataInPieFormat = pie(data)

    donutGroup
      .selectAll('path')
      .data(dataInPieFormat)
      .enter()
      .append('path')
      .attr('fill', 'lightsteelblue')
      .attr('opacity', 0.8)
      .on('mouseover', function(d) {
        d3.select('text').text(`${d.data.name}: ${d.data.value}`)
        d3.select(this)
          .style('cursor', 'pointer')
          .style('opacity', '0.5')
      })
      .on('mouseout', function(d) {
        d3.select('text').text(``)
        d3.select(this)
          .style('cursor', 'none')
          .style('opacity', '1')
      })
      .transition()
      .duration(1500)
      .attrTween('d', function(d) {
        const interpolateStart = d3.interpolate(0, d.startAngle)
        const interpolateEnd = d3.interpolate(0, d.endAngle)
        return function(t) {
          d.startAngle = interpolateStart(t)
          d.endAngle = interpolateEnd(t)
          return arc(d)
        }
      })
  }

  render() {
    return (
      <section className="page-excl-nav">
        <h1 className="graph-title"> Donut</h1>
        <svg />
      </section>
    )
  }
}
