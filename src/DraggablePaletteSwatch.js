import React from "react";
import { SortableElement } from "react-sortable-hoc";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";

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
  },
  swatchContent: {
    position: "absolute",
    width: "100%",
    left: "0px",
    bottom: "0px",
    padding: "10px",
    color: "rgba(0,0,0,0.5)",
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

const DraggablePaletteSwatch = SortableElement((props) => {
  const { classes, name, color, handleClick } = props;
  return (
    <div className={classes.root} style={{ backgroundColor: color }}>
      <div className={classes.swatchContent}>
        <span>{name}</span>
        <DeleteIcon className={classes.deleteIcon} onClick={handleClick} />
      </div>
    </div>
  );
});

export default withStyles(styles)(DraggablePaletteSwatch);
