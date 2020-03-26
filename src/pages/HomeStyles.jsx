import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  document: {
    backgroundColor: "#fff",
    width: "1000px",
    height: "800px",
    padding: "0",
    // boxShadow: "0 0 30px #333",
    display: "flex",
    flexDirection: "column"
  },
  title: {
    height: "14%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& h1": {
      margin: "0",
      padding: "0"
    }
  },
  main: {
    margin: "0 50px",
    display: "flex",
    flex: 1
  },
  leftColumn: {
    width: "60%",
    paddingRight: "15px"
  },
  rightColumn: {
    paddingLeft: "15px",
    width: "40%"
  },
  footer: {
    height: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "& svg": {
      fontSize: "18px",
      color: "green"
    }
  },
  link: {
    color: "black",
    "&:visited": {
      color: "black"
    }
  }
}));

export default useStyles;
