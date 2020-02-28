let d3 = require("d3");

export default function generateTreemap() {
  let width = 900,
    height = 600;

  let categories = [];

  let color = d3.scaleOrdinal(d3.schemeCategory10);
  let formatter = d3.format(",d");

  let tooltip = d3.select(".tooltip");

  let svg = d3
    .select("#treemap-chart")
    .append("svg")
    .attr("width", width)
    .attr("height", height);

  let treemap = d3
    .treemap()
    .tile(d3.treemapResquarify)
    .size([width, height])
    .round(true)
    .paddingInner(1);

  d3.json(
    "https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/movie-data.json"
  ).then(data => {
    // console.log(data);
    let root = d3
      .hierarchy(data)
      .eachBefore(function(d) {
        d.data.id =
          (d.parent ? d.parent.data.id + "." : "") +
          d.data.name
            .split(/\s|:|'/)

            .join("");
      })
      .sum(d => d.value)
      .sort(function(a, b) {
        return b.height - a.height || b.value - a.value;
      });

    treemap(root);

    let leaf = svg
      .selectAll("g")
      .data(root.leaves())
      .enter()
      .append("g")
      .attr("transform", d => `translate(${d.x0}, ${d.y0})`);

    leaf
      .append("rect")
      .attr("id", d => d.data.id)
      .attr("width", d => d.x1 - d.x0)
      .attr("height", d => d.y1 - d.y0)
      .attr("fill", d => {
        while (d.depth > 1) d = d.parent;
        return color(d.data.name);
      })
      .attr("fill-opacity", 0.6)
      .attr("class", "tile")
      .attr("data-name", d => d.data.name)
      .attr("data-category", d => d.data.category)
      .attr("data-value", d => d.data.value)
      .on("mouseover", function(d) {
        tooltip
          .transition()
          .duration(100)
          .style("opacity", 0.9);
        tooltip
          .html(
            `<strong>Title: </strong>${d.data.name}<br />
        <strong>Sales: </strong>$${formatter(d.data.value)}
        `
          )
          .style("left", d3.event.pageX + 15 + "px")
          .style("top", d3.event.pageY - 80 + "px");
        tooltip.attr("data-value", d.data.value);
      })
      .on("mouseout", function(d) {
        tooltip
          .transition()
          .duration(100)
          .style("opacity", 0);
      });

    leaf
      .append("clipPath")
      .attr("id", d => `clip-${d.data.id}`)
      .append("use")
      .attr("xlink:href", d => `#${d.data.id}`);

    leaf
      .append("text")
      .attr("clip-path", d => `url(#clip-${d.data.id})`)
      .selectAll("tspan")
      .data(d => {
        if (categories.indexOf(d.data.category) === -1)
          categories.push(d.data.category);
        return d.data.name.split(/(?=[A-Z][^A-Z])/g);
      })
      .enter()
      .append("tspan")
      .attr("x", 4)
      .attr("y", function(d, i) {
        return 13 + i * 12;
      })
      .text(d => d);

    let legend = d3
      .select("#treemap-legend")
      .append("svg")
      .attr("width", width)
      .attr("height", 50)
      .attr("id", "legend");

    legend
      .selectAll("g")
      .data(categories)
      .enter()
      .append("g");

    legend
      .selectAll("g")
      .append("rect")
      .attr("class", "legend-item")
      .attr("x", (d, i) => (width / categories.length) * i)
      .attr("y", 12.5)
      .attr("width", 25)
      .attr("height", 25)
      .attr("fill", d => color(d))
      .attr("opacity", 0.6);

    legend
      .selectAll("g")
      .append("text")
      .text(d => d)
      .attr("x", (d, i) => (width / categories.length) * i + 30)
      .attr("y", 29)
      .attr("fill", "black")
      .style("font-size", 12);
  });
}
