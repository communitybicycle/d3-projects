import * as d3 from "d3";

// Fetch data asynchronously
export default async function generateHeatMap() {
  return await fetch(
    "https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/global-temperature.json"
  )
    .then(res => res.json())
    .then(data => {
      console.log(data);
      const dataset = [...data.monthlyVariance];

      const baseTemp = data.baseTemperature;

      const month = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
      ];

      const colors = [
        "rgba(237, 130, 22, 0.2)",
        "rgba(237, 130, 22, 0.4)",
        "rgba(237, 130, 22, 0.6)",
        "rgba(237, 130, 22, 0.8)",
        "rgba(237, 130, 22, 1)"
      ];

      const tempSwitch = variance => {
        if (variance < -2.5) {
          return colors[0];
        } else if (variance < -1) {
          return colors[1];
        } else if (variance < 1) {
          return colors[2];
        } else if (variance < 2.5) {
          return colors[3];
        } else if (variance >= 2.5) {
          return colors[4];
        }
      };

      // Base variables
      const w = 1400;
      const h = 640;
      const padding = 100;

      const minYear = d3.min(dataset, d => d.year);
      const maxYear = d3.max(dataset, d => d.year);

      // Define the div for the tooltip
      const tooltip = d3.select("#heatmap-tooltip");

      // Create SVG
      const svg = d3
        .select("#heatmap")
        .append("svg")
        .attr("width", w)
        .attr("height", h - padding / 2)
        .append("g")
        .attr("transform", `translate(${padding / 2}, 0)`);

      // Set Scales
      const xScale = d3
        .scaleLinear()
        .domain([minYear, maxYear + 1])
        .range([padding / 2, w - padding * 1.5]);

      const yScale = d3
        .scaleLinear()
        .domain([0.5, 12.5])
        .range([h - padding, 0]);

      // Set Axes
      const xAxis = d3
        .axisBottom(xScale)
        .tickSizeOuter(0)
        .ticks(24)
        .tickFormat(d3.format(""));

      const yAxis = d3
        .axisLeft(yScale)
        .ticks(12)
        .tickSizeOuter(0)
        .tickValues([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
        .tickFormat(d => month[d - 1]);

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
        .call(yAxis);

      svg
        .selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("class", "cell")
        .attr("data-month", d => d.month)
        .attr("data-year", d => d.year)
        .attr("data-temp", d => (baseTemp + d.variance).toFixed(1))
        .attr("x", d => xScale(d.year) + 1)
        .attr("y", d => yScale(d.month) - (h - padding) / 24)
        .style("height", (h - padding) / 12)
        .style("width", w / (maxYear - minYear) - 0.5)
        .style("fill", d => tempSwitch(d.variance))
        .style("stroke", "black")
        .style("stroke-width", "0")
        .on("mouseover", function(d) {
          // Hover styles
          d3.select(this).style("stroke-width", "1");

          // Show tooltip
          tooltip
            .transition()
            .duration(100)
            .style("opacity", 0.9);
          tooltip
            .html(
              `Year: ${d.year}<br />Month: ${
                month[d.month - 1]
              }<br/>Temperature: ${(baseTemp + d.variance).toFixed(
                1
              )}℃<br />Variance: ${d.variance.toFixed(1)}℃`
            )
            .style("left", d3.event.pageX + 25 + "px")
            .style("top", d3.event.pageY - 100 + "px");
          tooltip.attr("data-year", d.year);
        })
        .on("mouseout", function(d) {
          // Hover styles
          d3.select(this).style("stroke-width", "0");

          // Hide tooltip
          tooltip
            .transition()
            .duration(100)
            .style("opacity", 0);
        });

      svg
        .selectAll(".tick")
        .filter(d => d === 0.5 || d === 12.5)
        .remove();

      const rectSize = 50;

      const legendValues = ["-2.5℃", "-1℃", "1℃", "2.5℃"];

      const legend = d3
        .select("#heatmap")
        .append("svg")
        .attr("id", "legend")
        .attr("height", 130)
        .attr("width", rectSize * 5)
        .append("g")
        .attr("transform", `translate(0, 30)`);

      legend
        .append("text")
        .attr("transform", `translate(${(rectSize * 5) / 2}, -5)`)
        .style("text-anchor", "middle")
        .style("font-size", "14px")
        .text("Temperature variance legend");

      const xScaleLegend = d3
        .scaleLinear()
        .domain([0, 5])
        .range([0, rectSize * 5]);

      const xAxisLegend = d3
        .axisBottom(xScaleLegend)
        .tickSize(0)
        .tickValues([1, 2, 3, 4])
        .tickFormat(d => legendValues[d - 1]);

      legend
        .append("g")
        .attr("id", "x-axis-legend")
        .attr("transform", `translate(0, ${rectSize + 5})`)
        .style("font-size", "12px")
        .call(xAxisLegend)
        .call(g => g.select(".domain").remove());

      legend
        .selectAll("rect")
        .data(new Array(5))
        .enter()
        .append("rect")
        .attr("x", (d, i) => i * rectSize)
        .attr("y", 0)
        .attr("height", rectSize)
        .attr("width", rectSize)

        .style("fill", (d, i) => colors[i]);

      return data.baseTemperature;
    });
}
