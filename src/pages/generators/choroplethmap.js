let d3 = require("d3");
let topojson = require("topojson");

// Fetch data asynchronously
export default async function generateChoroplethMap() {
  let svg = d3.select("#choropleth");
  let education = d3.map();
  let path = d3.geoPath();

  let color = d3
    .scaleThreshold()
    .domain([3, 12, 21, 30, 39, 48, 57, 66])
    .range(d3.schemeOranges[9]);

  let x = d3
    .scaleLinear()
    .domain([3, 75])
    .rangeRound([600, 860]);

  let g = svg
    .append("g")
    .attr("class", "key")
    .attr("id", "legend")
    .attr("transform", "translate(0,40)");

  g.selectAll("rect")
    .data(
      color.range().map(function(d) {
        d = color.invertExtent(d);
        if (d[0] == null) d[0] = x.domain()[0];
        if (d[1] == null) d[1] = x.domain()[1];
        return d;
      })
    )
    .enter()
    .append("rect")
    .attr("height", 8)
    .attr("x", d => x(d[0]))
    .attr("width", d => x(d[1]) - x(d[0]))
    .attr("fill", d => color(d[0]));

  g.call(
    d3
      .axisBottom(x)
      .tickSize(9)
      .tickFormat(function(x, i) {
        return x + "%";
      })
      .tickValues(color.domain())
  )
    .select(".domain")
    .remove();

  let tooltip = d3.select("#choro-tooltip");

  let promises = [
    d3.json(
      "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/counties.json"
    ),
    d3
      .json(
        "https://cdn.freecodecamp.org/testable-projects-fcc/data/choropleth_map/for_user_education.json"
      )
      .then(d =>
        d.forEach(e =>
          education.set(e.fips, {
            bachelorsOrHigher: +e.bachelorsOrHigher,
            state: e.state,
            area_name: e.area_name
          })
        )
      )
  ];

  Promise.all(promises).then(ready);

  function ready([county]) {
    svg
      .append("g")
      .selectAll("path")
      .data(topojson.feature(county, county.objects.counties).features)
      .enter()
      .append("path")
      .attr("fill", d => color(education.get(d.id).bachelorsOrHigher))
      .attr("d", path)
      .attr("class", "county")
      .attr("data-fips", d => d.id)
      .attr("data-education", d => education.get(d.id).bachelorsOrHigher)
      .on("mouseover", function(d) {
        tooltip
          .transition()
          .duration(100)
          .style("opacity", 0.9);
        tooltip
          .html(
            `${education.get(d.id).area_name}, ${education.get(d.id).state}: ${
              education.get(d.id).bachelorsOrHigher
            }%`
          )
          .style("left", `${d3.event.pageX + 15}px`)
          .style("top", `${d3.event.pageY - 50}px`);
        tooltip.attr("data-education", education.get(d.id).bachelorsOrHigher);
      })
      .on("mouseout", function(d) {
        tooltip
          .transition()
          .duration(100)
          .style("opacity", 0);
      });

    svg
      .append("path")
      .datum(
        topojson.mesh(county, county.objects.states, function(a, b) {
          return a !== b;
        })
      )
      .attr("class", "states")
      .attr("d", path);
  }
}
