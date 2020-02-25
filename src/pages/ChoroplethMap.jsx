import React, { useEffect } from "react";
import useStyles from "./ChoroplethMapStyles";
import generateChoroplethMap from "./generators/choroplethmap";
import Paper from "@material-ui/core/Paper";

function ChoroplethMap(props) {
  const classes = useStyles();

  useEffect(() => {
    generateChoroplethMap();
  });

  return (
    <div>
      <div className={classes.tooltip} id="choropleth-tooltip" />
      <Paper elevation={3} className={classes.document}>
        <div className={classes.title} id="title">
          <h1>United States Educational Attainment</h1>
          <p>
            Percentage of adults age 25 and older with a bachelor's degree or
            higher (2010-2014)
          </p>
        </div>
        <div className={classes.chart} id="choropleth-map">
          <svg
            className={classes.topo}
            id="choropleth"
            width="960"
            height="600"
          />
        </div>
        <div className={classes.footer}>
          Source:&nbsp;
          <a
            href="https://www.ers.usda.gov/data-products/county-level-data-sets/download-data.aspx"
            rel="noopener nofollow"
          >
            USDA Economic Research Service
          </a>
        </div>
        <div className={classes.tooltip} id="choro-tooltip"></div>
      </Paper>
    </div>
  );
}

export default ChoroplethMap;
