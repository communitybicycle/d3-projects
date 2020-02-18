import React, { useEffect } from "react";
import useStyles from "./ScatterplotGraphStyles";
import generateScatterplotGraph from "./generators/scatterplot";
import Paper from "@material-ui/core/Paper";

function ScatterplotGraph(props) {
  const classes = useStyles();
  useEffect(() => {
    generateScatterplotGraph();
  });
  return (
    <div>
      <div className={classes.tooltip} id="scatterplot-tooltip" />
      <Paper elevation={3} className={classes.document}>
        <div className={classes.title} id="title">
          <h1>Doping in Professional Bicycle Racing</h1>
          <p>35 Fastest times up Alpe d'Huez</p>
        </div>
        <div className={classes.chart} id="scatterchart" />
        <div className={classes.legend} id="legend">
          <div className={classes.legendDiv}>
            <div>
              <p>No doping allegations</p>
            </div>
            <div className={classes.orangeSquare} id="orange-square"></div>
          </div>
          <div className={classes.legendDiv}>
            <div>
              <p>Riders with doping allegations</p>
            </div>
            <div className={classes.blueSquare} id="blue-square"></div>
          </div>
        </div>
      </Paper>
    </div>
  );
}

export default ScatterplotGraph;
