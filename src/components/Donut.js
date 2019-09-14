import React from 'react'
import * as d3 from 'd3'

export class Donut extends React.Component {
  state = {
    data: [
      { name: 'Asia: 59.69%', value: 4581757408 },
      { name: 'Africa: 16.36%', value: 1216130000 },
      { name: 'Europe: 9.94%', value: 738849000 },
      { name: 'North Am: 7.79%', value: 579024000 },
      { name: 'South Am: 5.68%', value: 422535000 },
      { name: 'Oceania: 0.54%', value: 38304000 },
      { name: 'Antarctica: 0%', value: 0 }
    ]
  }

  componentDidMount() {
    const { data } = this.state

    const svgWidth = 500
    const svgHeight = 500

    const svg = d3
      .select('svg')
      .attr('class', 'pie')
      .attr('width', svgWidth)
      .attr('height', svgHeight)
    const outerRadius = 150
    const innerRadius = 80
    const donutGroup = svg
      .append('g')
      .attr(
        'transform',
        'translate(' + outerRadius * 2 + ',' + svgHeight / 2 + ')'
      )

    donutGroup
      .append('text')
      .text('continent pop')
      .attr('text-anchor', 'middle')
      .attr('font-family', 'futura')
      .attr('fill', 'lightslategray')

    const arc = d3
      .arc()
      .innerRadius(innerRadius)
      .outerRadius(outerRadius)

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
        d3.select('text').text(`${d.data.name}`)
        d3.select(this)
          .style('cursor', 'pointer')
          .style('opacity', '0.5')
      })
      .on('mouseout', function(d) {
        d3.select('text').text(`continent pop`)
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
