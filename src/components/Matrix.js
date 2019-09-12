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
      { id: 16, campus: 'gaza', gender: 'female', role: 'student' },
      { id: 17, campus: 'gaza', gender: 'male', role: 'student' },
      { id: 18, campus: 'gaza', gender: 'female', role: 'mentor' },
      { id: 19, campus: 'gaza', gender: 'female', role: 'mentor' },
      { id: 20, campus: 'gaza', gender: 'female', role: 'student' },
      { id: 21, campus: 'gaza', gender: 'male', role: 'student' },
      { id: 22, campus: 'gaza', gender: 'female', role: 'mentor' },
      { id: 23, campus: 'gaza', gender: 'female', role: 'mentor' },
      { id: 24, campus: 'gaza', gender: 'female', role: 'student' },
      { id: 25, campus: 'london', gender: 'female', role: 'mentor' },
      { id: 26, campus: 'london', gender: 'female', role: 'mentor' },
      { id: 27, campus: 'london', gender: 'female', role: 'student' }
    ]
  }
  // getX1Coordinate = (d) => {

  // }

  getX2Coordinate = (index, dotsPerRow, circleWidth) => {
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
  campusXCoordinate = campus => {
    switch (campus) {
      case 'gaza':
        return 0
      case 'khaleel':
        return 200
      case 'london':
        return 400
    }
  }

  componentDidMount() {
    const { data } = this.state

    d3.select('svg')
      .attr('width', 700)
      .attr('height', 500)
      .selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('r', 5)
      .attr('cy', (d, i) => {
        const index = this.findIndexOfDataInGroup(d)
        return this.getYCoordinate(index, 4, 10)
      })
      .attr('cx', (d, i) => {
        const campusXCoordinate = this.campusXCoordinate(d.campus)
        const index = this.findIndexOfDataInGroup(d)
        return this.getX2Coordinate(index, 4, 10) + campusXCoordinate
      })
      .attr('fill', 'pink')
  }

  findIndexOfDataInGroup = d => {
    const { data } = this.state
    const colGroup = data.filter(data => data.campus === d.campus)
    return colGroup.findIndex(data => data.id === d.id)
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
