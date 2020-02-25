import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  document: {
    backgroundColor: "#fff",
    width: "1000px",
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
    height: "75%",
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "column"
  },
  footer: {
    height: "10%",
    display: "flex",
    justifyContent: "center",
    fontWeight: "400",
    alignItems: "center",
    color: "#333",
    "& a": {
      textDecoration: "none",
      color: "#333",
      "&:hover": {
        color: "#888"
      }
    }
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
  },
  topo: {
    fill: "none",
    strokeLinejoin: "round"
  }
}));

export default useStyles;
