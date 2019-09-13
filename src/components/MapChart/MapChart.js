import React from 'react'
import * as d3 from 'd3'
import { zombie_data } from './zombie-attacks'
import { us_data } from './us' // this is the info we need to draw the map, download from website (bookmarked)
import { city_data } from './us-cities'

export class MapChart extends React.Component {
  state = {}

  componentDidMount() {
    const chart_width = Math.max(window.innerWidth - 600, 800)
    const chart_height = 500

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

    const projection = d3
      .geoAlbersUsa()
      .scale([chart_width]) // why is the chart width the scale?
      .translate([chart_width / 2, chart_height / 2])

    const path = d3.geoPath(projection)

    const svg = d3
      .select('svg')
      .attr('width', chart_width)
      .attr('height', chart_height)

    us_data.features.forEach((us_e, us_i) => {
      // the features refers to each state
      zombie_data.forEach((z_e, z_i) => {
        if (us_e.properties.name !== z_e.state) {
          return null
        }
        // this says add the zombie figure to the us_data
        us_data.features[us_i].properties.num = parseFloat(z_e.num)
      })
    })
    const leftOffset = 100
    const topOffset = 20
    svg
      .selectAll('path')
      .data(us_data.features)
      .enter()
      .append('path')
      .attr('d', path)
      .attr('fill', d => {
        const num = d.properties.num
        return num ? colorScale(num) : '#ddd'
      })
      .attr('stroke', 'red')
      .attr('stroke-width', 1)
      .attr('transform', d => `translate(${-leftOffset}, ${topOffset})`)

    const cityGroups = svg
      .selectAll('.cityGroups')
      .data(city_data)
      .enter()
      .append('g')
      .attr('class', 'cityGroups')
      .attr(
        'transform',
        d =>
          `translate(${projection([d.lon, d.lat])[0] -
            leftOffset}, ${projection([d.lon, d.lat])[1] + topOffset})`
      )

    cityGroups
      .append('circle')
      .attr('r', 20)
      .attr('r', d => Math.sqrt(parseInt(d.population) * 0.00005))
      .style('fill', 'pink')
      .style('opacity', 0.8)
      .attr('cx', '0')
      .attr('cy', '0')

    cityGroups
      .append('text')
      .text(d => d.city)
      .attr('font-family', 'sans-serif')
      .attr('font-size', 8)
      .attr('stroke', 'white')
      .attr('stroke-width', '0.5')
  }

  render() {
    return (
      <section className="page-excl-nav">
        <h1 className="graph-title"> Map</h1>
        <svg />
      </section>
    )
  }
}
