import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  document: {
    backgroundColor: "#fff",
    width: "1400px",
    height: "800px",
    padding: "0",
    display: "flex",
    flexDirection: "column"
  },
  title: {
    height: "15%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
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
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column"
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
    opacity: 0
  }
}));

export default useStyles;
