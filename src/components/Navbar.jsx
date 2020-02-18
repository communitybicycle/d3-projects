import React from "react";
import { Link, NavLink } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import BarChartIcon from "@material-ui/icons/BarChart";
import { Container } from "@material-ui/core";
// import Button from "@material-ui/core/Button";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import Menu from "@material-ui/core/Menu";
// import MenuItem from "@material-ui/core/MenuItem";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  container: {
    width: "1000px",
    padding: 0
  },
  title: {
    flexGrow: 1,
    display: "flex",
    justifyContent: "flex-start",
    "& a": {
      color: "white",
      textDecoration: "none"
    }
  },
  menuItem: {
    marginLeft: theme.spacing(2),
    "& a": {
      color: "white",
      textDecoration: "none"
    }
  }
}));

const activeLinkStyle = {
  // fontWeight: "bold",
  color: "silver"
};

export default function ButtonAppBar() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Container maxWidth="lg" disableGutters className={classes.container}>
          <Toolbar disableGutters>
            {/*<BarChartIcon />*/}

            <Typography variant="h6" className={classes.title}>
              <Link exact to="/">
                Data Projects
              </Link>
            </Typography>
            <div className={classes.menuItem}>
              <Typography variant="body1">
                <NavLink exact to="/" activeStyle={activeLinkStyle}>
                  Home
                </NavLink>
              </Typography>
            </div>
            <div className={classes.menuItem}>
              <Typography variant="body1">
                <NavLink exact to="/bar-chart" activeStyle={activeLinkStyle}>
                  Bar Chart
                </NavLink>
              </Typography>
            </div>
            <div className={classes.menuItem}>
              <Typography variant="body1">
                <NavLink
                  exact
                  to="/scatterplot-graph"
                  activeStyle={activeLinkStyle}
                >
                  Scatterplot Graph
                </NavLink>
              </Typography>
            </div>
            <div className={classes.menuItem}>
              <Typography variant="body1">
                <NavLink exact to="/heat-map" activeStyle={activeLinkStyle}>
                  Heat Map
                </NavLink>
              </Typography>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
