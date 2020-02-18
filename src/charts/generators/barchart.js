import * as d3 from "d3";

export default async function generateBarChart() {
  fetch(
    "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/GDP-data.json"
  )
    .then(res => res.json())
    .then(data => {
      const dataset = [...data.data];

      // Base variables
      const w = 1000;
      const h = 640;
      const padding = 100;

      const parser = d3.timeParse("%Y-%m-%d");

      // Set Scales
      const xScale = d3
        .scaleTime()
        .domain([
          new Date(parser(data.from_date)),
          new Date(parser(data.to_date))
        ])
        .range([padding, w - padding]);

      const yScale = d3
        .scaleLinear()
        .domain([0, d3.max(dataset, d => d[1])])
        .range([h - padding, 0]);

      // Set Axes
      const xAxis = d3.axisBottom(xScale);
      const yAxis = d3.axisLeft(yScale);

      // Define the div for the tooltip
      const tooltipDiv = d3.select("#bar-chart-tooltip");

      // Create SVG
      const svg = d3
        .select("#chart")
        .append("svg")
        .attr("width", w)
        .attr("height", h)
        .append("g")
        .attr("transform", `translate(${padding / 2}, ${padding / 2})`);

      // x-axis
      svg
        .append("g")
        .attr("id", "x-axis")
        .attr("transform", `translate(${-padding / 2}, ${h - padding})`)
        .call(xAxis);

      // y-axis
      svg
        .append("g")
        .attr("id", "y-axis")
        .attr("transform", `translate(${padding / 2}, 0)`)
        .call(yAxis.ticks(10));

      svg
        .selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .style("fill", "steelblue")
        .attr("data-date", d => d[0])
        .attr("data-gdp", d => d[1])
        .attr("x", (d, i) => xScale(parser(d[0])) - padding / 2)
        .attr("y", d => yScale(d[1]))
        .attr("width", 3)
        .attr("height", d => h - padding - yScale(d[1]))
        // tooltip
        .on("mouseover", function(d) {
          d3.select(this).style("fill", "rgb(107, 152, 189)");
          tooltipDiv
            .transition()
            .duration(100)
            .style("opacity", 0.9);
          tooltipDiv
            .html(`${d[0]}<br/>$${d[1]} billion`)
            .style("left", d3.event.pageX + 15 + "px")
            .style("top", d3.event.pageY - 80 + "px");
          tooltipDiv.attr("data-date", d[0]).attr("data-gdp", d[1]);
        })
        .on("mouseout", function(d) {
          d3.select(this).style("fill", "steelblue");
          tooltipDiv
            .transition()
            .duration(100)
            .style("opacity", 0);
        });
    });
}
