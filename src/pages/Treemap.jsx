import React, { useEffect } from "react";
import useStyles from "./TreemapStyles";
import generateTreemap from "./generators/treemap";
import Paper from "@material-ui/core/Paper";

function Treemap(props) {
  const classes = useStyles();
  useEffect(() => {
    generateTreemap();
  }, []);
  return (
    <div>
      <div className={classes.tooltip} id="scatterplot-tooltip" />
      <Paper elevation={3} className={classes.document}>
        <div className={classes.title} id="title">
          <h1>Movie Sales by Category</h1>
          <p id="description">
            The sales of movies by category, represented by the size of each
            box.
          </p>
        </div>
        <div className={classes.chart} id="treemap-chart" />
        <div className={classes.footer} id="treemap-legend" />
      </Paper>
    </div>
  );
}

export default Treemap;
