
import React from 'react';
import * as d3 from 'd3';

export class Donut extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: "USA", value: 40 },
        { name: "UK", value: 20 },
        { name: "France", value: 30 },
        { name: "Hungry", value: 10 },



      ],
      padAngle: 0,
      colors: [
        "rgba(211, 101, 67,0.7)",
        "rgb(173,83,55)",
        "rgb(211,101,67)",
        "rgb(219,129,101)",
        "rgba(211, 101, 67,0.7)",
        "rgb(173,83,55)",
      ]
    };
  }

  componentDidMount() {
    const { data, colors } = this.state

    const width = 800;
    const height = 500;

    const svg = d3.select('svg')
      .attr('class', 'pie')
      .attr('width', width)
      .attr('height', height);

    const donutGroup = svg.append('g')
      .attr('transform', 'translate(' + (width / 2) + ',' + (height / 2) + ')');

    donutGroup.append('text')
      .attr('text-anchor', 'middle')
      .attr('font-family', 'sans-serif')

    const arc = d3.arc()
      .innerRadius(50)
      .outerRadius(200);

    const pie = d3.pie()
      .padAngle(0.05)
      .sort(null) // need this so that it loads in order
      .value((d) => d.value)
    const dataInPieFormat = pie(data)

    donutGroup
      .selectAll('path')
      .data(dataInPieFormat)
      .enter()
      .append('path')
      .attr('fill', (d, i) => colors[i])
      .on("mouseover", function (d) {
        d3.select('text').text(`${d.data.name}: ${d.data.value}`)
        d3.select(this).style("cursor", "pointer").style("opacity", "0.5");
      })
      .on("mouseout", function (d) {
        d3.select('text').text(``)
        d3.select(this)
          .style("cursor", "none").style("opacity", "1");
      })
      .transition()
      .duration(1500)
      .attrTween('d', function (d) {
        const interpolateStart = d3.interpolate(0, d.startAngle)
        const interpolateEnd = d3.interpolate(0, d.endAngle);
        return function (t) {
          d.startAngle = interpolateStart(t)
          d.endAngle = interpolateEnd(t);
          return arc(d)
        }
      })

  };

  render() {
    return (
      <section className="page-excl-nav">
        <h1 className="graph-title"> DONUT</h1>
        <svg />
      </section>
    )
  }
}
