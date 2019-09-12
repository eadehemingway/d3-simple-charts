import React from 'react';
import * as d3 from 'd3';

export class LineChart extends React.Component {
    state = {
        data: [
            {
                label: "lineOne",
                lineData: [
                    { rating: 1, date_entered: '2018-02-12' },
                    { rating: 2, date_entered: '2018-02-30' },
                    { rating: 2, date_entered: '2018-03-14' },
                    { rating: 2.5, date_entered: '2018-03-30' },
                    { rating: 3, date_entered: '2018-04-02' },
                    { rating: 3.5, date_entered: '2018-04-15' },
                    { rating: 4, date_entered: '2018-04-30' }]
            },
            {
                label: "lineTwo",
                lineData: [
                    { rating: 7, date_entered: '2018-02-12' },
                    { rating: 6, date_entered: '2018-02-30' },
                    { rating: 5, date_entered: '2018-03-14' },
                    { rating: 4, date_entered: '2018-03-30' },
                    { rating: 3, date_entered: '2018-04-02' },
                    { rating: 2, date_entered: '2018-04-15' },
                    { rating: 2, date_entered: '2018-04-30' }
                ]
            },
            {
                label: "lineThree",
                lineData: [
                    { rating: 2, date_entered: '2018-02-12' },
                    { rating: 2, date_entered: '2018-02-30' },
                    { rating: 4, date_entered: '2018-03-14' },
                    { rating: 4, date_entered: '2018-03-30' },
                    { rating: 5, date_entered: '2018-04-02' },
                    { rating: 6, date_entered: '2018-04-15' },
                    { rating: 6, date_entered: '2018-04-30' }
                ]
            }

        ],

        chart_width: 600,
        chart_height: 400
    }


    componentDidMount() {
        const { data, chart_height, chart_width } = this.state
        const timeParsedData = data.map(d => {
            const lineData = d.lineData.map(l => ({
                ...l,
                date_entered: d3.timeParse("%Y-%m-%d")(l.date_entered)
            }))
            return {
                ...d,
                lineData
            }
        })

        const padding = 75

        const x_scale = d3
            .scaleTime()
            .domain([d3.timeParse("%Y-%m-%d")('2018-02-12'), d3.timeParse("%Y-%m-%d")('2018-04-30')])
            .range([padding, chart_width - padding]);

        const y_scale = d3
            .scaleLinear()
            .domain([0, 10])
            .range([chart_height - padding, padding]);

        const svg = d3.select('svg')
            .attr('width', chart_width)
            .attr('height', chart_height);

        const x_axis = d3
            .axisBottom(x_scale)
            .tickFormat(d3.timeFormat('%y-%m-%d'))

        svg
            .append('g')
            .attr('transform', 'translate(0,' + (chart_height - padding) + ')')
            .call(x_axis)
            .selectAll('text')
            .style('text-anchor', 'end')
            .attr('dx', '-.8em')
            .attr('dy', '.15em')
            .attr('font-size', '0.8rem')
            .attr('transform', 'rotate(-65)');

        const y_axis = d3.axisLeft(y_scale).ticks(11);
        svg
            .append('g')
            .attr('transform', 'translate(' + padding + ', 0)')
            .call(y_axis);

        const colorsFactPalette = d3.scaleOrdinal(d3.schemeSet3);

        const totalLength = chart_width * 3;

        const lineFunc = d3.line()
            .x((d) => x_scale(d.date_entered))
            .y((d) => y_scale(d.rating))

        const factors = svg
            .selectAll('.factors')
            .data(timeParsedData)
            .enter()
            .append('g')
            .append('path')
            .attr('fill', 'none')
            .style('stroke', (d, i) => colorsFactPalette(i))
            .style('stroke-width', '3px')
            .attr('d', d => lineFunc(d.lineData)) // the lineFunc needs to be passed an array of points
            .attr('class', d => d.label)
        factors
            .attr('stroke-dasharray', totalLength + ' ' + totalLength)
            .attr('stroke-dashoffset', totalLength)
            .transition()
            .duration(9000)
            .ease(d3.easeLinear)
            .attr('stroke-dashoffset', 0);

        const legendItem = svg
            .selectAll('.legend')
            .data(timeParsedData)
            .enter()
            .append('g')
            .attr('transform', (d, i) => 'translate(' + (chart_width - 200) + ',' + (i * 15 + 60) + ')')
            .attr('class', '.legend')
            .style('opacity', 1)
            .on("mouseover", function (d) {
                d3.select(this).style("cursor", "pointer")
            })
            .on('click', function (d) {
                const legendKey = this;
                const line = d3.select(`.${d.label}`)
                if (legendKey.style.opacity == 1) {
                    d3.select(legendKey).style('opacity', 0.3);
                    line.style('display', 'none');
                } else {
                    d3.select(legendKey).style('opacity', 1);
                    line.style('display', 'block');
                }
            });

        legendItem
            .append('text')
            .text('test label')
            .attr('transform', 'translate(20,10)')
            .style('font-family', 'sans-serif')

        legendItem
            .append('rect')
            .attr('width', 10)
            .attr('height', 10)
            .attr('fill', (d, i) => colorsFactPalette(i))





    }





    render() {
        return (

            <section className="page-excl-nav">
                <h1 className="graph-title"> LINE</h1>
                <svg></svg>


            </section>

        );
    }
}