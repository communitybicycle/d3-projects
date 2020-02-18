import React from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import FavoriteIcon from "@material-ui/icons/Favorite";
import useStyles from "./HomeStyles";

function Home(props) {
  const classes = useStyles();
  return (
    <Paper elevation={3} className={classes.document}>
      <div className={classes.title}>
        <h1>Welcome to the Data Graph Site!</h1>
      </div>
      <main className={classes.main}>
        <div className={classes.leftColumn}>
          <Typography variant="body1">
            This website showcases the freeCodeCamp projects on data
            visualization using D3.js. The charts work by making an API to
            gather the data and generates the visualization using D3.js.
          </Typography>
          <br />
          <Typography variant="body1">
            This app also uses client-side rendering for the navigation between
            pages.
          </Typography>
        </div>
        <div className={classes.rightColumn}>
          <Typography variant="h6">Tools Used in This App:</Typography>
          <ul>
            <li>D3.js</li>
            <li>React</li>
            <li>React Router DOM</li>
            <li>Material UI</li>
            <li>NPM</li>
          </ul>
        </div>
      </main>
      <footer className={classes.footer}>
        <Typography variant="subtitle1">
          Made with <FavoriteIcon /> by{" "}
          <a href="https://communitybicycle.github.io/">Hal S</a>.
        </Typography>
      </footer>
    </Paper>
  );
}

export default Home;
