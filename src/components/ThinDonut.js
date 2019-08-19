import React from 'react';
import * as d3 from 'd3';

export class ThinDonut extends React.Component {
  state = {
    data: [1, 2]
  };


  componentDidMount() {
    const { data } = this.state
    this.interval = setInterval(() => this.setState({ data: this.makeData(2) }), 1000);
    const width = 960
    const height = 500;


    const svg = d3
      .select("svg")
      .attr("width", width)
      .attr("height", height);

    svg
      .append('g')
      .attr('transform', 'translate(' + width / 2 + ',' + height / 2 + ')')
      .attr('class', 'donutContainer')


    this.drawDonut()

  }

  componentDidUpdate() {
    this.drawDonut()
  }
  drawDonut = () => {
    const { data } = this.state
    // Store the displayed angles in _current.
    // Then, interpolate from _current to the new angles.
    // During the transition, _current is updated in-place by d3.interpolate.
    // function arcTween(a) {
    //   const i = d3.interpolate(this._current, a);
    //   this._current = i(0);
    //   return function (t) {
    //     return arc(i(t));
    //   };
    // }
    const oRadius = 200;
    const iRadius = 180;
    const color = ['lightslategrey', 'linen']
    const arc = d3.arc()
      .outerRadius(oRadius)
      .innerRadius(iRadius);
    const pie = d3.pie().value(function (d) { return d; }).sort(null);
    const donutContainer = d3.select('.donutContainer')
    // enter data and draw pie chart

    const arcSelection = donutContainer
      .selectAll("path")
      .data(pie(data))

    const enterSelection = arcSelection
      .enter()
      .append("path")
      .attr("class", "piechart")
      .attr("fill", function (d, i) { return color[i]; })

    arcSelection
      .exit()
      .remove()


    const updateSelection = enterSelection.merge(arcSelection)

    updateSelection
      .transition().duration(1000)
      .attr("d", arc)
      .each(function (d) { this._current = d; })


    // donutContainer.selectAll("path").data(pie).transition().duration(1000).attrTween("d", arcTween)


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
