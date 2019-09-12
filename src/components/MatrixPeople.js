import React from 'react'
import * as d3 from 'd3'

export class MatrixPeople extends React.Component {
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

    const dotsPerRow = 5
    const radius = 8
    const leftBoxPadding = 5
    const topBoxPadding = 50
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
      .attr('x', d => this.campusXCoordinate(d) + leftBoxPadding)
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
      .append('path')

      .attr(
        'd',
        'M12.075,10.812c1.358-0.853,2.242-2.507,2.242-4.037c0-2.181-1.795-4.618-4.198-4.618S5.921,4.594,5.921,6.775c0,1.53,0.884,3.185,2.242,4.037c-3.222,0.865-5.6,3.807-5.6,7.298c0,0.23,0.189,0.42,0.42,0.42h14.273c0.23,0,0.42-0.189,0.42-0.42C17.676,14.619,15.297,11.677,12.075,10.812 M6.761,6.775c0-2.162,1.773-3.778,3.358-3.778s3.359,1.616,3.359,3.778c0,2.162-1.774,3.778-3.359,3.778S6.761,8.937,6.761,6.775 M3.415,17.69c0.218-3.51,3.142-6.297,6.704-6.297c3.562,0,6.486,2.787,6.705,6.297H3.415z'
      )
      .attr('transform', d => {
        const campusXCoordinate = this.campusXCoordinate(d.campus)
        const x = campusXCoordinate + leftBoxPadding
        const y = this.getY2Coordinate(0, dotsPerRow, radius) + topBoxPadding
        return 'translate(' + x + ',' + y + ')'
      })
      .attr('fill', d => this.getColorForCampus(d.campus))

    d3.selectAll('path')
      .transition()
      .duration(500)
      .attr('transform', d => {
        const campusXCoordinate = this.campusXCoordinate(d.campus)
        const index = this.findIndexOfDataInGroup(d)
        const x =
          campusXCoordinate +
          this.getX2Coordinate(index, dotsPerRow, radius) +
          leftBoxPadding

        const y =
          this.getY2Coordinate(index, dotsPerRow, radius) + topBoxPadding

        return 'translate(' + x + ',' + y + ')'
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
