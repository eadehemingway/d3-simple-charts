import React from 'react'
import * as d3 from 'd3'
import { sankey, sankeyLinkHorizontal } from 'd3-sankey'

export class Sankey extends React.Component {
  state = {
    data: {
      nodes: [
        { id: 0, name: 'id0' },
        { id: 1, name: 'id1' },
        { id: 2, name: 'id2' },
        { id: 3, name: 'id3' },
        { id: 4, name: 'id4' }
      ],
      links: [
        { source: 0, target: 2, value: 2 },
        { source: 1, target: 2, value: 2 },
        { source: 1, target: 3, value: 2 },
        { source: 0, target: 4, value: 2 },
        { source: 2, target: 3, value: 2 },
        { source: 2, target: 4, value: 2 },
        { source: 3, target: 4, value: 4 }
      ]
    }
  }

  componentDidMount() {
    const { data } = this.state
    const svgWidth = 500
    const svgHeight = 800
    const san = sankey()
      .size([svgWidth, 300])
      .nodeId(d => d.id)
      .nodeWidth(20)
      .nodePadding(20)

    let graph = san(data)
    const svg = d3
      .select('svg')
      .attr('width', svgWidth)
      .attr('height', svgHeight)

    const link = svg
      .append('g')
      .classed('links', true)
      .selectAll('path')
      .data(graph.links)
      .enter()
      .append('path')
      .attr('class', 'link')
      .attr('d', sankeyLinkHorizontal())
      .attr('fill', 'none')
      .attr('stroke', 'coral')
      .attr('stroke-width', d => d.width)
      .attr('opacity', 0.3)
      .attr('transform', d => 'translate(0,100)')

    svg
      .append('g')
      .classed('nodes', true)
      .selectAll('rect')
      .data(graph.nodes)
      .enter()
      .append('rect')
      .classed('node', true)
      .attr('x', d => d.x0)
      .attr('y', d => d.y0)
      .attr('width', d => d.x1 - d.x0)
      .attr('height', d => d.y1 - d.y0)
      .attr('fill', 'white')
      .attr('stroke', 'coral')
      .attr('opacity', 0.8)
      .attr('transform', d => 'translate(0,100)')
      .call(d3.drag().on('drag', dragmove))

    function dragmove(d) {
      d.y0 = d.y0 + d3.event.dy
      const rectY = d3.select(this).attr('y')
      const yTranslate = d.y0 - rectY
      d3.select(this).attr(
        'transform',
        'translate(0' + ',' + (yTranslate + 100) + ')'
      )
      san.update(graph)
      link.attr('d', sankeyLinkHorizontal())
    }
  }

  render() {
    return (
      <section className="page-excl-nav">
        <h1 className="graph-title"> Sankey</h1>
        <svg></svg>
      </section>
    )
  }
}
