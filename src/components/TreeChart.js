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
    let nodes = d3.hierarchy(data, d => d.children)
    nodes = treemap(nodes)

    const svg = d3
      .select('svg')
      .attr('width', 700)
      .attr('height', 500)

    const node = svg
      .selectAll('.node')
      .data(nodes.descendants())
      .enter()
      .append('g')
      .attr('transform', d => 'translate(' + (d.y + padding) + ',' + d.x + ')')

    const link = svg
      .selectAll('.link')
      .data(nodes.descendants().slice(1))
      .enter()
      .append('path')
      .attr('class', 'link')
      .style('stroke', 'black')
      .attr('fill', 'none')
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
      .attr('transform', d => 'translate(' + padding + ',0)')

    node
      .append('circle')
      .attr('r', 10)
      .style('stroke', 'red')
      .style('fill', 'pink')

    node
      .append('text')
      .attr('dy', '.35em')
      .attr('x', d => (d.children ? (d.data.value + 5) * -1 : d.data.value + 5))
      .attr('y', d => (d.children && d.depth !== 0 ? -(d.data.value + 5) : d))
      .text(d => d.data.name)
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
