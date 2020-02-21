import React, { useState, useEffect } from "react";
import useStyles from "./HeatMapStyles";
import Paper from "@material-ui/core/Paper";
import generateHeatMap from "./generators/heatmap";

function HeatMap(props) {
  const [baseTemp, setBaseTemp] = useState("");
  const classes = useStyles();
  useEffect(() => {
    generateHeatMap().then(data => setBaseTemp(data.toString()));
  }, []);
  return (
    <div>
      <div className={classes.tooltip} id="heatmap-tooltip" />
      <Paper elevation={3} className={classes.document}>
        <div className={classes.title}>
          <h1>Monthly Global Land-Surface Temperature</h1>
          {baseTemp && baseTemp.length > 0 ? (
            <p id="description">1753 - 2015: base temperature {baseTemp}℃</p>
          ) : (
            ""
          )}
        </div>
        <div className={classes.chart} id="heatmap"></div>
      </Paper>
    </div>
  );
}

export default HeatMap;
