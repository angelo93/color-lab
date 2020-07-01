import chroma from "chroma-js";
import sizes from "./sizes";

const styles = {
  root: {
    width: "20%",
    height: "25%",
    display: "inline-block",
    margin: "0 auto",
    position: "relative",
    marginBottom: "-5.5px",
    cursor: "pointer",
    "&:hover svg": {
      color: "whitesmoke",
      transform: "scale(1.5)",
    },
    [sizes.down("lg")]: {
      width: "25%",
      height: "20%",
    },
    [sizes.down("md")]: {
      width: "50%",
      height: "10%",
    },
    [sizes.down("sm")]: {
      width: "100%",
      height: "5%",
    },
  },
  swatchContent: {
    position: "absolute",
    width: "100%",
    left: "0px",
    bottom: "0px",
    padding: "10px",
    color: (props) =>
      chroma(props.color).luminance() <= 0.6 ? "whitesmoke" : "black",
    letterSpacing: "1px",
    textTransform: "uppercase",
    fontSize: "12px",
    display: "flex",
    justifyContent: "space-between",
  },
  deleteIcon: {
    transition: "all 0.3s ease-in-out",
  },
};

export default styles;
