import React from 'react'
import * as d3 from 'd3'

export class CirclePacking extends React.Component {
  svgHeight = 600
  svgWidth = 500
  state = {
    data: {
      name: 'flare',
      children: [
        {
          name: 'analytics',
          children: [
            {
              name: 'cluster',
              children: [
                {
                  name: 'AgglomerativeCluster',
                  value: 3938
                },
                {
                  name: 'CommunityStructure',
                  value: 3812
                },
                {
                  name: 'HierarchicalCluster',
                  value: 6714
                },
                {
                  name: 'MergeEdge',
                  value: 743
                }
              ]
            },
            {
              name: 'graph',
              children: [
                {
                  name: 'BetweennessCentrality',
                  value: 3534
                },
                {
                  name: 'LinkDistance',
                  value: 5731
                },
                {
                  name: 'MaxFlowMinCut',
                  value: 7840
                },
                {
                  name: 'ShortestPaths',
                  value: 5914
                },
                {
                  name: 'SpanningTree',
                  value: 3416
                }
              ]
            },
            {
              name: 'optimization',
              children: [
                {
                  name: 'AspectRatioBanker',
                  value: 7074
                }
              ]
            }
          ]
        },
        {
          name: 'animate',
          children: [
            {
              name: 'Easing',
              value: 17010
            },
            {
              name: 'FunctionSequence',
              value: 5842
            },
            {
              name: 'interpolate',
              children: [
                {
                  name: 'Interpolator',
                  value: 8746
                },
                {
                  name: 'MatrixInterpolator',
                  value: 2202
                },
                {
                  name: 'NumberInterpolator',
                  value: 1382
                },
                {
                  name: 'ObjectInterpolator',
                  value: 1629
                },
                {
                  name: 'PointInterpolator',
                  value: 1675
                },
                {
                  name: 'RectangleInterpolator',
                  value: 2042
                }
              ]
            },
            {
              name: 'ISchedulable',
              value: 1041
            },
            {
              name: 'Parallel',
              value: 5176
            },
            {
              name: 'Pause',
              value: 449
            },
            {
              name: 'Scheduler',
              value: 5593
            },
            {
              name: 'Sequence',
              value: 5534
            },
            {
              name: 'Transition',
              value: 9201
            }
          ]
        }
      ]
    }
  }

  componentDidMount() {
    const { data } = this.state
    const svg = d3
      .select('svg')
      .attr('width', this.svgWidth)
      .attr('height', this.svgHeight)
    const margin = 20
    const diameter = +svg.attr('width')
    const pack = data =>
      d3
        .pack()
        .size([this.svgWidth, this.svgWidth])
        .padding(3)(
        d3
          .hierarchy(data)
          .sum(d => d.value)
          .sort((a, b) => b.value - a.value)
      )

    let focus = data
    const root = pack(data)
    const nodes = pack(data).descendants()
    let view
    const g = svg.append('g')
    //   .attr('transform', 'translate(' + diameter / 2 + ',' + diameter / 2 + ')')

    const circle = g
      .selectAll('circle')
      .data(nodes)
      .enter()
      .append('circle')
      .attr('class', function(d) {
        return d.parent
          ? d.children
            ? 'node'
            : 'node node--leaf'
          : 'node node--root'
      })
      .style('fill', 'none')
      .attr('stroke', 'pink')
      .attr('cx', d => d.x)
      .attr('cy', d => d.y)
      .attr('r', d => d.r)
      .on('click', function(d) {
        if (focus !== d) zoom(d), d3.event.stopPropagation()
      })

    const text = g
      .selectAll('text')
      .data(nodes)
      .enter()
      .append('text')
      .attr('class', 'label')
      .text(function(d) {
        return d.data.name
      })
      .attr('x', d => d.x)
      .attr('y', d => d.y)

    // var node = g.selectAll('circle,text')

    // svg.style('background', 'linen').on('click', function() {
    //   zoom(root)
    // })

    // zoomTo([root.x, root.y, root.r * 2])

    // function zoom(d) {
    //   var focus0 = focus
    //   const focus = d

    //   var transition = d3
    //     .transition()
    //     .duration(d3.event.altKey ? 7500 : 750)
    //     .tween('zoom', function(d) {
    //       var i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2])
    //       return function(t) {
    //         zoomTo(i(t))
    //       }
    //     })

    //   transition
    //     .selectAll('text')
    //     .filter(function(d) {
    //       return d.parent === focus || this.style.display === 'inline'
    //     })
    //     .style('fill-opacity', function(d) {
    //       return d.parent === focus ? 1 : 0
    //     })
    //     .on('start', function(d) {
    //       if (d.parent === focus) this.style.display = 'inline'
    //     })
    //     .on('end', function(d) {
    //       if (d.parent !== focus) this.style.display = 'none'
    //     })
    // }

    // function zoomTo(v) {
    //   var k = diameter / v[2]
    //   view = v
    //   node.attr('transform', function(d) {
    //     return 'translate(' + (d.x - v[0]) * k + ',' + (d.y - v[1]) * k + ')'
    //   })
    //   circle.attr('r', function(d) {
    //     return d.r * k
    //   })
    // }
  }

  render() {
    return (
      <section className="page-excl-nav">
        <h1 className="graph-title"> CirclePacking </h1>
        <svg></svg>
      </section>
    )
  }
}
