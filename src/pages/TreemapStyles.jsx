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
    flexDirection: "column",
    "& h1": {
      margin: "0",
      paddingBottom: "5px"
    },
    "& p": {
      margin: "0",
      padding: "0"
    }
  },
  chart: {
    height: "75%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    fontSize: "12px"
  },
  footer: {
    height: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
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
