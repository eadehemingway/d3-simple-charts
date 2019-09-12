import React from 'react'
import * as d3 from 'd3'

export class BarChart extends React.Component {
  state = {
    data: [
      { key: 0, num: 6 },
      { key: 1, num: 20 },
      { key: 2, num: 21 },
      { key: 3, num: 14 },
      { key: 4, num: 2 },
      { key: 5, num: 30 },
      { key: 6, num: 7 },
      { key: 7, num: 16 },
      { key: 8, num: 25 },
      { key: 9, num: 5 },
      { key: 10, num: 11 },
      { key: 11, num: 28 },
      { key: 12, num: 10 },
      { key: 13, num: 26 },
      { key: 14, num: 9 }
    ],
    chart_width: 800,
    chart_height: 400
  }

  componentDidMount() {
    const { chart_width, chart_height } = this.state
    d3.select('svg')
      .attr('width', chart_width)
      .attr('height', chart_height)

    this.draw()
  }

  draw = () => {
    const { data, chart_height } = this.state
    const x_scale = this.calculateXScale()
    const y_scale = this.calculateYScale()
    const svg = d3.select('svg')
    const bars = svg.selectAll('rect').data(data, d => d.key)

    const enteringBars = bars
      .enter()
      .append('rect')
      .attr('x', (_, i) => x_scale(i))
      .attr('y', chart_height)
      .attr('width', x_scale.bandwidth())
      .attr('height', 0)
      .attr('fill', 'LightSteelBlue ')

    const mergedBarSelection = enteringBars.merge(bars)

    mergedBarSelection
      .transition()
      .duration(750)
      .attr('x', (_, i) => x_scale(i))
      .attr('y', d => chart_height - y_scale(d.num))
      .attr('width', x_scale.bandwidth())
      .attr('height', d => y_scale(d.num))

    bars
      .exit()
      .transition()
      .attr('x', -x_scale.bandwidth())
      .remove()

    const labels = svg.selectAll('text').data(data, d => d.key)

    const enteringLabels = labels
      .enter()
      .append('text')
      .text(d => d.num)
      .attr('x', (_, i) => x_scale(i) + x_scale.bandwidth() / 2)
      .attr('y', chart_height)
      .attr('font-size', '14px')
      .attr('fill', '#fff')
      .attr('text-anchor', 'middle')

    const mergedLabelSelection = enteringLabels.merge(labels)

    mergedLabelSelection
      .transition()
      .duration(1000)
      .attr('x', (_, i) => x_scale(i) + x_scale.bandwidth() / 2)
      .attr('y', d => chart_height - y_scale(d.num) + 15)

    labels
      .exit()
      .transition()
      .attr('x', -x_scale.bandwidth())
      .remove()
  }

  calculateXScale = () => {
    const { data, chart_width } = this.state
    return d3
      .scaleBand()
      .domain(d3.range(data.length))
      .rangeRound([0, chart_width])
      .paddingInner(0.05)
  }

  calculateYScale = () => {
    const { data, chart_height } = this.state
    return d3
      .scaleLinear()
      .domain([0, d3.max(data, d => d.num)])
      .range([0, chart_height])
  }

  addBar = () => {
    const { data } = this.state
    const new_num = Math.floor(Math.random() * d3.max(data, d => d.num)) + 1
    const newData = [
      ...data,
      { key: data[data.length - 1].key + 1, num: new_num }
    ]
    this.setState({ data: newData }, () => this.draw())
  }

  removeBar = () => {
    const { data } = this.state
    const newData = [...data].slice(1)
    this.setState({ data: newData }, () => this.draw())
  }

  render() {
    return (
      <section className="page-excl-nav">
        <h1 className="graph-title"> BAR CHART</h1>
        <div id="chart" />
        <svg></svg>

        <div className="button-container">
          <button id="increase" className="increase-btn" onClick={this.addBar}>
            +
          </button>
          <button
            id="decrease"
            className="decrease-btn"
            onClick={this.removeBar}
          >
            -
          </button>
        </div>
      </section>
    )
  }
}
