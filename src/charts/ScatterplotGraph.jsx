import React, { useRef, useEffect } from "react";
import useStyles from "./ScatterplotGraphStyles";
import Paper from "@material-ui/core/Paper";

function ScatterplotGraph(props) {
  const classes = useStyles();
  useEffect(() => {
    // generateBarChart();
  });
  return (
    <div>
      <div className={classes.tooltip} id="bar-chart-tooltip" />
      <Paper elevation={3} className={classes.document}>
        <div className={classes.title}>
          <h1>This page is under construction</h1>
        </div>
        <div className={classes.chart} id="chart"></div>
        <div className={classes.footer}>
          {/*<p>*/}
          {/*  More Information:&nbsp;*/}
          {/*  <a*/}
          {/*    href="http://www.bea.gov/national/pdf/nipaguid.pdf"*/}
          {/*    target="_blank"*/}
          {/*  >*/}
          {/*    http://www.bea.gov/national/pdf/nipaguid.pdf*/}
          {/*  </a>*/}
          {/*</p>*/}
        </div>
      </Paper>
    </div>
  );
}

export default ScatterplotGraph;
