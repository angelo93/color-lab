// Main Vendors
import React, { PureComponent } from "react";
import { withStyles } from "@material-ui/styles";
import DeleteIcon from "@material-ui/icons/Delete";
// Styles
import styles from "./styles/MiniPaletteStyles";

class MiniPalette extends PureComponent {
  constructor(props) {
    super(props);

    this.deletePalette = this.deletePalette.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  deletePalette(e) {
    e.stopPropagation();
    this.props.openDialog(this.props.id);
  }

  handleClick() {
    this.props.goToPalette(this.props.id);
  }

  render() {
    const { classes, paletteName, emoji, colors } = this.props;
    const miniPaletteBoxes = colors.map((color) => (
      <div
        className={classes.miniPalette}
        style={{ backgroundColor: color.color }}
        key={color.name}
      />
    ));

    return (
      <div className={classes.root} onClick={this.handleClick}>
        <DeleteIcon
          className={classes.deleteIcon}
          onClick={this.deletePalette}
        />
        <div className={classes.miniPaletteColors}>{miniPaletteBoxes}</div>
        <h5 className={classes.title}>
          {paletteName} <span className={classes.emoji}>{emoji}</span>
        </h5>
      </div>
    );
  }
}

export default withStyles(styles)(MiniPalette);
