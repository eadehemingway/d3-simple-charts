import React from 'react';
import * as d3 from 'd3';

export class ThinDonut extends React.Component {
  state = {
    data: [1, 2]
  };


  componentDidMount() {
    const { data } = this.state
    this.interval = setInterval(() => this.setState({ data: this.makeData(2) }), 2000);
    const width = 960
    const height = 500;

    const svg = d3
      .select("svg")
      .attr("width", width)
      .attr("height", height);

    const donutContainer = svg
      .append('g')
      .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')
      .attr('class', 'donutContainer')
    const oRadius = 200;
    const iRadius = 180;
    const color = ['lightslategrey', 'linen']
    const arc = d3.arc()
      .outerRadius(oRadius)
      .innerRadius(iRadius);
    const pie = d3.pie().value(function (d) { return d; }).sort(null);

    donutContainer
      .selectAll("path")
      .data(pie(data))
      .enter()
      .append("path")
      .attr("class", "piechart")
      .attr("fill", (d, i) => color[i])
      .transition()
      .duration(1500)
      .attrTween("d", function (d) {
        const i = d3.interpolate(0, d);
        this._current = i(0);
        return function (t) {
          return arc(i(t));
        };

      })


  }

  componentDidUpdate() {
    this.drawDonut()
  }
  drawDonut = () => {
    const { data } = this.state

    const oRadius = 200;
    const iRadius = 180;

    const arc = d3.arc()
      .outerRadius(oRadius)
      .innerRadius(iRadius);
    const pie = d3.pie().value(function (d) { return d; }).sort(null);
    const donutContainer = d3.select('.donutContainer')
    // enter data and draw pie chart

    const arcSelection = donutContainer
      .selectAll("path")
      .data(pie(data))

    arcSelection
      .transition()
      .duration(1500)
      .attrTween("d", function (d) {
        const i = d3.interpolate(this._current, d);
        this._current = i(0);
        return function (t) {
          return arc(i(t));
        };

      })

  }
  makeData = (size) => {
    return d3.range(size).map(function (item) {
      return Math.random() * 100;
    });
  };
  componentWillUnmount() {
    clearInterval(this.interval);
  }
  render() {
    return (
      <section className="page-excl-nav">
        <h1 className="graph-title"> thin donut</h1>
        <svg />
      </section>
    );
  }
}
