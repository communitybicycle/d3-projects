import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  document: {
    backgroundColor: "#fff",
    width: "1000px",
    height: "800px",
    padding: "0",
    display: "flex",
    flexDirection: "column",
    position: "relative"
  },
  title: {
    height: "15%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    "& h1": {
      margin: "0",
      padding: "0"
    },
    "& p": {
      margin: "0",
      padding: "0"
    }
  },
  chart: {
    height: "85%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: "50px"
  },
  tooltip: {
    position: "absolute",
    textAlign: "center",
    width: "auto",
    height: "auto",
    padding: "15px",
    fontSize: "16px",
    background: "lightsteelblue",
    border: "0px",
    pointerEvents: "none",
    opacity: 0,
    zIndex: 10
  },
  legendDiv: {
    display: "flex",
    alignItems: "center",
    "& p": {
      marginRight: "10px",
      fontSize: "14px"
    }
  },
  legend: {
    position: "absolute",
    right: "100px",
    bottom: "350px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end"
  },
  orangeSquare: {
    width: "30px",
    height: "30px",
    backgroundColor: "rgba(255, 165, 0, 0.7)"
  },
  blueSquare: {
    width: "30px",
    height: "30px",
    backgroundColor: "rgba(70, 130, 180, 0.7)"
  }
}));

export default useStyles;
