import sizes from "./sizes";
import bg from "./bg.svg";

export default {
  root: {
    backgroundColor: "#324b4b",
    backgroundImage: `url(${bg})`,
    backgroundAttachemnt: "fixed",
    backgroundSize: "cover",
    backgroundPosition: "center",
    /* background by SVGBackgrounds.com */
    height: "100vh",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
    overflow: "scroll",
    scrollbarWidth: "none",
  },
  title: {
    fontSize: "2rem",
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.down("xl")]: {
      width: "80%",
    },
    [sizes.down("xs")]: {
      width: "75%",
    },
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    color: "whitesmoke",
    alignItems: "center",
    "& a": {
      color: "whitesmoke",
    },
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "2.1rem",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2, 50%)",
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "1.4rem",
    },
  },
};
