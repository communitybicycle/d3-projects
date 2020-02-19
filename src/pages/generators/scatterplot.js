import * as d3 from "d3";

// Fetch data asynchronously
export default async function generateScatterplotGraph() {
  fetch(
    "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/cyclist-data.json"
  )
    .then(res => res.json())
    .then(data => {
      const dataset = [...data];

      // Base variables
      const w = 1000;
      const h = 640;
      const padding = 100;

      const parser = d3.timeParse("%M:%S");
      const timeFormat = d3.timeFormat("%M:%S");
      // Set Scales
      const xScale = d3
        .scaleLinear()
        .domain([
          d3.min(dataset, d => d.Year - 1),
          d3.max(dataset, d => d.Year + 1)
        ])
        .range([padding / 2, w - padding * 1.5]);

      const yScale = d3
        .scaleTime()
        .domain([
          d3.max(dataset, d => new Date(parser(d.Time))),
          d3.min(dataset, d => new Date(parser(d.Time)))
        ])
        .range([h - padding, 0]);

      // Set Axes
      const xAxis = d3.axisBottom(xScale).tickFormat(d3.format(""));
      const yAxis = d3.axisLeft(yScale).tickFormat(timeFormat);

      // Define the div for the tooltip
      const div = d3.select("#scatterplot-tooltip");

      // Create SVG
      const svg = d3
        .select("#scatterchart")
        .append("svg")
        .attr("width", w)
        .attr("height", h)
        .append("g")
        .attr("transform", `translate(${padding / 2}, ${padding / 2})`);

      // x-axis
      svg
        .append("g")
        .attr("id", "x-axis")
        .attr("transform", `translate(0, ${h - padding})`)
        .call(xAxis);

      // y-axis
      svg
        .append("g")
        .attr("id", "y-axis")
        .attr("transform", `translate(${padding / 2}, 0)`)
        .call(yAxis.ticks(12));

      svg
        .selectAll("circle")
        .data(dataset)
        .enter()
        .append("circle")
        .attr("class", "dot")
        .style("fill", d =>
          d.Doping ? "rgba(70, 130, 180, 0.7)" : "rgba(255,165,0, 0.7)"
        )
        .attr("data-xvalue", d => d.Year)
        .attr("data-yvalue", d => parser(d.Time))
        .attr("cx", (d, i) => xScale(d.Year))
        .attr("cy", d => yScale(parser(d.Time)))
        .attr("r", 8)
        // tooltip
        .on("mouseover", d => {
          div
            .transition()
            .duration(100)
            .style("opacity", 0.9);
          div
            .html(
              `${d.Name}: ${d.Nationality}<br/>Year: ${d.Year} | Time: ${
                d.Time
              }${d.Doping && "<br/>" + d.Doping}`
            )
            .style("left", d3.event.pageX + 25 + "px")
            .style("top", d3.event.pageY - 100 + "px");
          div.attr("data-year", d.Year);
        })
        .on("mouseout", d => {
          div
            .transition()
            .duration(100)
            .style("opacity", 0);
        });
    });
}
