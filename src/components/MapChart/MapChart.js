
import React from 'react';
import * as d3 from 'd3';
import {
    zombie_data
} from './zombie-attacks'
import { us_data } from './us'
import { city_data } from './us-cities'

export class MapChart extends React.Component {
    state = {

    }

    componentDidMount() {
        const chart_width = 800;
        const chart_height = 600;

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
            ]);

        const projection = d3
            .geoAlbersUsa()
            .scale([chart_width])
            .translate([chart_width / 2, chart_height / 2]);

        const path = d3.geoPath(projection);

        const svg = d3
            .select('svg')
            .attr('width', chart_width)
            .attr('height', chart_height);

        us_data.features.forEach((us_e, us_i) => {
            zombie_data.forEach((z_e, z_i) => {
                if (us_e.properties.name !== z_e.state) {
                    return null;
                }
                us_data.features[us_i].properties.num = parseFloat(z_e.num);
            });
        });

        svg
            .selectAll('path')
            .data(us_data.features)
            .enter()
            .append('path')
            .attr('d', path)
            .attr('fill', (d) => {
                const num = d.properties.num;
                return num ? colorScale(num) : '#ddd';
            })
            .attr('stroke', 'red')
            .attr('stroke-width', 1);

        svg
            .selectAll('circle')
            .data(city_data)
            .enter()
            .append('circle')
            .style('fill', 'pink')
            .style('opacity', 0.8)
            .attr('cx', function (d) {
                return projection([d.lon, d.lat])[0];
            })
            .attr('cy', function (d) {
                return projection([d.lon, d.lat])[1];
            })
            .attr('r', function (d) {
                return Math.sqrt(parseInt(d.population) * 0.00005);
            })
            .append('title')
            .text(function (d) {
                return d.city;
            });

    };


    render() {
        return (
            <section className="page-excl-nav">
                <h1 className="graph-title"> MAP</h1>
                <svg />
            </section>
        )
    }
}
