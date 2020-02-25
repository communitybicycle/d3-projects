import React from "react";
import Navbar from "./components/Navbar";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import BarChart from "./pages/BarChart";
import ScatterplotGraph from "./pages/ScatterplotGraph";
import HeatMap from "./pages/HeatMap";
import Home from "./pages/Home";
import ChoroplethMap from "./pages/ChoroplethMap";

const useStyles = makeStyles(() => ({
  root: {
    backgroundColor: "lightgrey",
    height: "calc(100vh - 64px)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
}));

function App() {
  const classes = useStyles();
  return (
    <div className="Root">
      <Navbar />
      <div className={classes.root}>
        <Switch>
          <Route exact path="/bar-chart" render={() => <BarChart />} />
          <Route
            exact
            path="/scatterplot-graph"
            render={() => <ScatterplotGraph />}
          />
          <Route exact path="/heat-map" render={() => <HeatMap />} />
          <Route
            exact
            path="/choropleth-map"
            render={() => <ChoroplethMap />}
          />

          <Route exact path="/" render={() => <Home />} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
