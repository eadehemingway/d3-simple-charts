import React from 'react'
import * as d3 from 'd3'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

export class ForceWithLinks extends React.Component {
  state = {
    data: {
      nodes: [
        {
          name: 'label',
          index: 0,
          group: 1
        },
        {
          name: 'label',
          index: 1,
          group: 1
        },
        {
          name: 'label',
          index: 2,
          group: 1
        },
        {
          name: 'label',
          index: 3,
          group: 1
        },
        {
          name: 'label',
          index: 4,
          group: 1
        },
        {
          name: 'label',
          index: 5,
          group: 2
        },
        {
          name: 'label',
          index: 6,
          group: 2
        },
        {
          name: 'label',
          index: 7,
          group: 2
        },
        {
          name: 'label',
          index: 8,
          group: 3
        },
        {
          name: 'label',
          index: 9,
          group: 3
        },
        {
          name: 'label',
          index: 10,
          group: 3
        }
      ],
      links: [
        {
          source: 0,
          target: 1
        },
        {
          source: 0,
          target: 2
        },
        {
          source: 0,
          target: 3
        },
        {
          source: 0,
          target: 4
        },
        {
          source: 1,
          target: 2
        },
        {
          source: 1,
          target: 3
        },
        {
          source: 1,
          target: 4
        },
        {
          source: 2,
          target: 3
        },
        {
          source: 2,
          target: 4
        },
        {
          source: 0,
          target: 5
        },
        {
          source: 5,
          target: 6
        },
        {
          source: 5,
          target: 7
        },
        {
          source: 0,
          target: 8
        },
        {
          source: 0,
          target: 9
        },
        {
          source: 0,
          target: 10
        },
        {
          source: 8,
          target: 7
        }
      ]
    }
  }

  componentDidMount() {
    const chart_width = Math.max(window.innerWidth - 600, 500)

    const chart_height = 500
    const { data } = this.state

    const svg = d3
      .select('svg')
      .attr('width', chart_width)
      .attr('height', chart_height)

    // this creates the force that we will use
    const force = d3
      .forceSimulation()
      // the charge says how far apart the nodes should be from each other
      .force(
        'charge',
        d3
          .forceManyBody()
          .strength(-800)
          .distanceMin(100)
          .distanceMax(1100)
      )
      // this tells the links which bit of data to look for in the nodes to identify which to connect to
      .force('link', d3.forceLink().id(d => d.index))
      // this says make the force be pulled towards the center
      .force('center', d3.forceCenter(chart_width / 2, chart_height / 2))

    //this passes the data to the force we have created
    force
      .nodes(data.nodes)
      .force('link')
      .links(data.links)

    const link = svg
      .selectAll('line')
      .data(data.links)
      .enter()
      .append('line')
      .attr('stroke', '#ccc')

    const node = svg
      .selectAll('circle')
      .data(data.nodes)
      .enter()
      .append('circle')
      .attr('r', 13)
      .attr('fill', d =>
        d.group == 1 ? '#aaa' : d.group == 2 ? '#fbc280' : '#405275'
      )
      // is the call method just a way of applying a function to the current selection?
      .call(
        d3
          .drag()
          .on('drag', d => {
            d.fx = d3.event.x
            d.fy = d3.event.y
          })
          .on('end', d => {
            // alphaTarget(0.5) states the pace at which to spring back into place
            force.alphaTarget(0.5)
            // setting fx and fy to null means the node is free to move around
            d.fx = null
            d.fy = null
          })
      )

    // the force simulation is asynchronous, the nodes all start in the same position in
    // top left of page, as the force simulation develops the positions change. The on.("tick")
    // says to update the layout as the simulation updates. without it, the nodes and links just get
    // drawn in their first position and stay there.
    force.on('tick', () => {
      link
        .attr('x1', d => d.source.x)
        .attr('y1', d => d.source.y)
        .attr('x2', d => d.target.x)
        .attr('y2', d => d.target.y)

      node.attr('transform', d => {
        return 'translate(' + d.x + ',' + d.y + ')'
      })
    })
  }

  render() {
    return (
      <section className="page-excl-nav">
        <h1 className="graph-title"> Force directed with links</h1>
        <svg></svg>
      </section>
    )
  }
}
