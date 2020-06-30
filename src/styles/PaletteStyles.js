// export default {
//   Palette: {
//     height: "100vh",
//     display: "flex",
//     flexDirection: "column",
//     overflow: "hidden",
//   },
//   paletteColors: {
//     height: "90%",
//   },
// };

export default {
  Palette: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  paletteColors: {
    height: "90%",
  },
  goBack: {
    width: "20%",
    height: "50%",
    display: "inline-block",
    margin: "0 auto",
    position: "relative",
    marginBottom: "-4px",
    opacity: "1",
    backgroundColor: "black",
    "& a": {
      color: "whitesmoke",
      width: "100px",
      height: "30px",
      position: "absolute",
      display: "inline-block",
      top: "50%",
      left: "50%",
      marginLeft: "-50px",
      marginTop: "-15px",
      textAlign: "center",
      outline: "none",
      background: "rgba(255, 255, 255, 0.3)",
      fontSize: "1rem",
      lineHeight: "30px",
      textTransform: "uppercase",
      border: "none",
      textDecoration: "none",
      cursor: "pointer",
    },
  },
};
