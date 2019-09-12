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
  getY2Coordinate = (index, dotsPerRow, radius) => {
    const placeInCol = Math.floor(index / dotsPerRow)
    const circlePadding = 5
    return placeInCol * (circlePadding + radius * 2)
  }

  getX2Coordinate = (index, dotsPerRow, radius) => {
    const placeInRow = index % dotsPerRow
    const circlePadding = 5
    return placeInRow * (radius * 2 + circlePadding)
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

  getColorForCampus = campus => {
    switch (campus) {
      case 'gaza':
        return 'coral'
      case 'khaleel':
        return 'steelblue'
      case 'london':
        return 'lightsteelblue'
    }
  }

  componentDidMount() {
    const { data } = this.state
    const leftBoxPadding = 5
    const topBoxPadding = 50
    const dotsPerRow = 6
    const radius = 5
    const campuses = data.reduce((acc, curr) => {
      if (!acc.includes(curr.campus)) acc.push(curr.campus)
      return acc
    }, [])

    const svg = d3
      .select('svg')
      .attr('width', 700)
      .attr('height', 500)

    const labels = svg
      .selectAll('text')
      .data(campuses)
      .enter()
      .append('text')
      .text(d => d)
      .attr('x', d => this.campusXCoordinate(d) + leftBoxPadding - 5)
      .attr(
        'y',
        d => this.getY2Coordinate(0, dotsPerRow, radius) + topBoxPadding - 30
      )
      .attr('font-family', 'futura')
      .attr('fill', 'lightslategray')

    svg
      .selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('r', radius)
      .attr(
        'cy',
        () => this.getY2Coordinate(0, dotsPerRow, radius) + topBoxPadding
      )
      .attr('cx', d => {
        const campusXCoordinate = this.campusXCoordinate(d.campus)
        return campusXCoordinate + leftBoxPadding
      })
      .attr('fill', d => this.getColorForCampus(d.campus))

    d3.selectAll('circle')
      .transition()
      .duration(500)
      .attr('cy', d => {
        const index = this.findIndexOfDataInGroup(d)
        return this.getY2Coordinate(index, dotsPerRow, radius) + topBoxPadding
      })
      .attr('cx', d => {
        const campusXCoordinate = this.campusXCoordinate(d.campus)
        const index = this.findIndexOfDataInGroup(d)
        return (
          campusXCoordinate +
          this.getX2Coordinate(index, dotsPerRow, radius) +
          leftBoxPadding
        )
      })
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
