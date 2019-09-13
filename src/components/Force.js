import React from 'react'
import * as d3 from 'd3'

export class Force extends React.Component {
  svgWidth = Math.max(window.innerWidth - 600, 500)
  svgHeight = 500
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
    ],
    categories: {
      role: ['student', 'mentor'],
      campus: ['gaza', 'khaleel'],
      gender: ['male', 'female']
    },
    value: 'role'
  }

  componentDidMount() {
    const { data } = this.state
    const svg = d3
      .select('svg')
      .attr('width', this.svgWidth)
      .attr('height', this.svgHeight)

    svg
      .selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('r', 12)
      .attr('class', 'bubble')
      .attr('fill', d => (d.gender === 'male' ? 'coral' : '#c4c3d0'))

    this.updateLabels()
    this.createSimulation()
  }

  // works out the coordinates of the groups, and adds 'group' which can be read later to use for the labels of each group
  centerOfGravityForGroups = categories => {
    const firstCenter = this.svgWidth / 4
    const secondCenter = firstCenter * 3
    const yVal = this.svgHeight / 2
    const [groupOne, groupTwo] = categories
    return [
      { x: firstCenter, y: yVal, group: groupOne },
      { x: secondCenter, y: yVal, group: groupTwo }
    ]
  }

  // this takes a data point and works out which category it should be in
  centerOfGravityForDatum = d => {
    const { categories, value } = this.state
    const dataGroupArr = categories[value]
    const dataGroup = d[value]
    return this.centerOfGravityForGroups(dataGroupArr).find(
      e => e.group === dataGroup
    )
  }

  createSimulation = () => {
    const { data } = this.state

    const forceX = d3
      .forceX()
      .x(d => this.centerOfGravityForDatum(d).x)
      .strength(1)

    const forceY = d3
      .forceY()
      .y(d => this.centerOfGravityForDatum(d).y)
      .strength(1)

    const collision = d3.forceCollide().radius(13)

    d3.forceSimulation(data)
      .force('collision', collision)
      .force('x', forceX)
      .force('y', forceY)
      .alpha(0.1) // small alpha to have the elements move at a slower pace
      .on('tick', () => {
        // call the tick function running the simulation
        d3.selectAll('.bubble').attr(
          'transform',
          d => `translate(${d.x} ${d.y})`
        )
      })
  }

  updateLabels = () => {
    const { categories, value } = this.state
    const dataGroupArr = categories[value]
    const updatedCategoriesCenter = this.centerOfGravityForGroups(dataGroupArr)

    const labelSelection = d3
      .select('svg')
      .selectAll('text')
      .data(updatedCategoriesCenter)

    labelSelection.exit().remove()

    const entering = labelSelection
      .enter()
      .append('text')
      .attr('fill', 'red')
      .style('font-size', '20')
      .style('text-transform', 'uppercase')
      .style('letter-spacing', '0.1rem')
      .attr('text-anchor', 'middle')
      .attr('dominant-baseline', 'middle')

    const updatedAndEnter = labelSelection.merge(entering)

    updatedAndEnter
      .text(d => d.group)
      .attr('x', d => d.x)
      .attr('opacity', '0.2')
      .attr('font-family', 'sans-serif')
      .attr('y', 100)
  }

  redraw = value => {
    this.setState({ value }, () => {
      this.updateLabels()
      this.createSimulation()
    })
  }
  render() {
    const { categories } = this.state
    const selectCategories = Object.keys(categories)
    return (
      <section className="page-excl-nav">
        <div className="force-directed-page">
          <h1 className="graph-title"> Force directed</h1>
          <select
            className="force-select"
            onChange={e => this.redraw(e.target.value)}
          >
            {selectCategories.map(c => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
          <svg></svg>
        </div>
      </section>
    )
  }
}
