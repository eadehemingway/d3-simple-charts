import React from 'react'
import * as d3 from 'd3'
import { zombie_data } from './zombie-attacks'
import { geoJson } from './geoJson' // this is the info we need to draw the map, download from website (bookmarked)
import { city_data } from './us-cities'

export class MapChart extends React.Component {
  svgWidth = 800
  svgHeight = 500
  projection = null

  state = {
    mapTranslationX: this.svgWidth / 2,
    mapTranslationY: this.svgHeight / 2,
    zoomValue: 1
  }
  componentDidMount() {
    const colorScale = d3
      .scaleQuantize() // scales the numbers because the colours can be considered catagorical... allows each colour to represent lots of values
      .domain([
        d3.min(zombie_data, d => d.num),
        d3.max(zombie_data, d => d.num)
      ])
      .range([
        'rgb(255,245,240)',
        'rgb(254,224,210)',
        'rgb(252,187,161)',
        'rgb(252,146,114)',
        'rgb(251,106,74)',
        'rgb(239,59,44)',
        'rgb(203,24,29)',
        'rgb(165,15,21)',
        'rgb(103,0,13)'
      ])

    const projection = this.projection()

    const path = d3.geoPath(projection)

    const svg = d3
      .select('svg')
      .attr('width', this.svgWidth)
      .attr('height', this.svgHeight)

    // combine the geoJson with the zombie data
    geoJson.features.forEach((us_e, us_i) => {
      // the features refers to each state
      zombie_data.forEach((z_e, z_i) => {
        if (us_e.properties.name !== z_e.state) {
          return null
        }
        // this says add the zombie figure to the geoJson data
        geoJson.features[us_i].properties.num = parseFloat(z_e.num)
      })
    })

    const topOffset = 20
    svg
      .selectAll('path')
      .data(geoJson.features)
      .enter()
      .append('path')
      .attr('d', path)
      .attr('fill', d => {
        const num = d.properties.num
        return num ? colorScale(num) : '#ddd'
      })
      .attr('stroke', 'red')
      .attr('stroke-width', 1)
      .attr('transform', d => `translate(0, ${topOffset})`)

    const cityGroups = svg
      .selectAll('.cityGroups')
      .data(city_data)
      .enter()
      .append('g')
      .attr('class', 'cityGroups')
      .attr('transform', d => {
        const coordinates = projection([d.lon, d.lat])
        return `translate(${coordinates[0]}, ${coordinates[1] + topOffset})`
      })

    cityGroups
      .append('circle')
      .attr('r', d => Math.sqrt(parseInt(d.population) * 0.00005))
      .style('fill', 'pink')
      .style('opacity', 0.8)
      .attr('cx', '0')
      .attr('cy', '0')
      .append('title')
      .text(d => d.city)

    cityGroups
      .append('text')
      .text(d => d.city)
      .attr('font-family', 'futura')
      .attr('font-size', 8)
      .attr('stroke', 'white')
      .attr('stroke-width', '0.5')
  }
  projection = () =>
    d3
      .geoAlbersUsa()
      .scale([this.svgWidth])
      .translate([this.svgWidth / 2, this.svgHeight / 2])

  move = (x, y, zoomIncrement) => {
    const { mapTranslationX, mapTranslationY, zoomValue } = this.state
    const newX = mapTranslationX + x
    const newY = mapTranslationY + y
    const newZoomValue = Math.max(zoomValue + zoomIncrement, 1)
    this.setState({
      mapTranslationX: newX,
      mapTranslationY: newY,
      zoomValue: newZoomValue
    })

    const projection = this.projection()
    projection.translate([newX, newY]).scale([this.svgWidth * newZoomValue])
    const topOffset = 20
    const svg = d3.select('svg')
    svg
      .selectAll('path')
      .transition()
      .duration(750)
      .attr('d', d3.geoPath(projection))
    svg
      .selectAll('.cityGroups')
      .transition()
      .duration(750)
      .attr('transform', d => {
        const coordinates = projection([d.lon, d.lat])
        return `translate(${coordinates[0]}, ${coordinates[1] + topOffset})`
      })
  }

  render() {
    return (
      <section className="page-excl-nav">
        <h1 className="graph-title"> Map</h1>
        <svg />
        <div className="button-container">
          <button className="btn" onClick={() => this.move(0, 100, 0)}>
            U
          </button>
          <button className="btn" onClick={() => this.move(0, -100, 0)}>
            D
          </button>
          <button className="btn" onClick={() => this.move(100, 0, 0)}>
            L
          </button>
          <button className="btn" onClick={() => this.move(-100, 0, 0)}>
            R
          </button>
          <button className="btn" onClick={() => this.move(null, null, 1)}>
            +
          </button>
          <button className="btn" onClick={() => this.move(null, null, -1)}>
            -
          </button>
        </div>
      </section>
    )
  }
}
