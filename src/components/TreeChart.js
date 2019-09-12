import React from 'react'
import * as d3 from 'd3'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

export class TreeChart extends React.Component {
  state = {
    data: {
      name: 'Eve',
      children: [
        {
          name: 'Cain'
        },
        {
          name: 'Seth',
          children: [
            {
              name: 'Enos'
            },
            {
              name: 'Noam'
            }
          ]
        },
        {
          name: 'Abel'
        },
        {
          name: 'Awan',
          children: [
            {
              name: 'Enoch'
            }
          ]
        },
        {
          name: 'Azura'
        }
      ]
    }
  }
  componentDidMount() {
    const { data } = this.state
    const padding = 50
    const treemap = d3.tree().size([500, 500])
    const nodes = treemap(d3.hierarchy(data, d => d.children))

    const svg = d3
      .select('svg')
      .attr('width', 700)
      .attr('height', 500)
    const link = svg
      .selectAll('.link')
      .data(nodes.descendants().slice(1)) // this cuts off the first node cos that doesnt have links going to it
      .enter()
      .append('path')
      .attr('class', 'link')
      .style('stroke', 'lightsteelblue')
      .style('stroke-width', '2px')
      .attr('fill', 'none')
      .attr('d', d => {
        return (
          'M' +
          nodes.y +
          ',' +
          nodes.x +
          'C' +
          nodes.y / 2 +
          ',' +
          d.x +
          ' ' +
          nodes.y / 2 +
          ',' +
          nodes.x +
          ' ' +
          nodes.y +
          ',' +
          nodes.x
        )
      })
      .attr('transform', d => 'translate(' + padding + ',0)')

    link
      .transition()
      .duration(1000)
      .attr('d', d => {
        return (
          'M' +
          d.y +
          ',' +
          d.x +
          'C' +
          (d.y + d.parent.y) / 2 +
          ',' +
          d.x +
          ' ' +
          (d.y + d.parent.y) / 2 +
          ',' +
          d.parent.x +
          ' ' +
          d.parent.y +
          ',' +
          d.parent.x
        )
      })

    const node = svg
      .selectAll('.node')
      .data(nodes.descendants())
      .enter()
      .append('g')
      .attr(
        'transform',
        d => 'translate(' + (nodes.y + padding) + ',' + nodes.x + ')'
      )

    node
      .append('circle')
      .attr('r', 10)
      .style('stroke', 'red')
      .style('fill', 'white')

    node
      .append('text')
      .attr('dy', '.35em')
      .attr('x', 20)
      .text(d => d.data.name)

    node
      .transition()
      .duration(1000)
      .attr('transform', d => 'translate(' + (d.y + padding) + ',' + d.x + ')')
  }
  render() {
    return (
      <section className="page-excl-nav">
        <h1 className="graph-title"> TREE</h1>
        <svg></svg>
      </section>
    )
  }
}
