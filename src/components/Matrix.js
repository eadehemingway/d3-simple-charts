import React from 'react'
import * as d3 from 'd3'

export class Matrix extends React.Component {
  state = {
    data: [
      { id: 2, campus: 'khaleel', gender: 'female', role: 'student' },
      { id: 3, campus: 'khaleel', gender: 'male', role: 'student' },
      { id: 4, campus: 'khaleel', gender: 'male', role: 'student' },
      { id: 6, campus: 'khaleel', gender: 'female', role: 'mentor' },
      { id: 7, campus: 'khaleel', gender: 'female', role: 'mentor' },
      { id: 8, campus: 'khaleel', gender: 'female', role: 'student' },
      { id: 10, campus: 'gaza', gender: 'female', role: 'student' },
      { id: 11, campus: 'gaza', gender: 'male', role: 'student' },
      { id: 12, campus: 'gaza', gender: 'male', role: 'student' },
      { id: 14, campus: 'gaza', gender: 'female', role: 'mentor' },
      { id: 15, campus: 'gaza', gender: 'female', role: 'mentor' },
      { id: 16, campus: 'gaza', gender: 'female', role: 'student' }
    ]
  }

  getXCoordinate = (index, dotsPerRow, circleWidth) => {
    const placeInRow = index % dotsPerRow
    const circlePadding = 5
    const boxPadding = 50
    return placeInRow * (circleWidth + circlePadding) + boxPadding
  }
  getYCoordinate = (index, dotsPerRow, circleWidth) => {
    const placeInCol = Math.floor(index / dotsPerRow)
    const circlePadding = 5
    const boxPadding = 50
    return placeInCol * (circlePadding + circleWidth) + boxPadding
  }
  componentDidMount() {
    const { data } = this.state

    d3.select('svg')
      .selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('r', 5)
      .attr('cy', (d, i) => this.getYCoordinate(i, 4, 10))
      .attr('cx', (d, i) => this.getXCoordinate(i, 4, 10))
      .attr('fill', 'pink')
  }

  render() {
    return (
      <section className="page-excl-nav">
        <h1 className="graph-title"> MATRIX</h1>
        <svg></svg>
      </section>
    )
  }
}
