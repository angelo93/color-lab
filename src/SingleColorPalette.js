// Main Vendors
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
// Components
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import PaletteCard from "./PaletteCard";
// Styles
import styles from "./styles/PaletteStyles";

class SingleColorPalette extends Component {
  constructor(props) {
    super(props);
    this._shades = this.getColorShades(this.props.palette, this.props.colorId);
    this.state = { format: "hex" };
    this.changeFormat = this.changeFormat.bind(this);
  }

  getColorShades(palette, colorToFilterBy) {
    let shades = [];
    let allColors = palette.colors;

    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter((color) => color.id === colorToFilterBy)
      );
    }

    return shades.slice(1);
  }

  changeFormat(val) {
    this.setState({ format: val });
  }

  render() {
    const { classes } = this.props;
    const { format } = this.state;
    const { paletteName, emoji, id } = this.props.palette;

    const colorShadeCards = this._shades.map((color) => (
      <PaletteCard
        key={color.name}
        name={color.name}
        background={color[format]}
        showMultiColorPalette={false}
      />
    ));

    return (
      <div className={classes.Palette}>
        <Navbar handleChange={this.changeFormat} showSlider={false} />
        <div className={classes.paletteColors}>
          {colorShadeCards}
          <div className={classes.goBack}>
            <Link to={`/palette/${id}`}>GO BACK</Link>
          </div>
        </div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default withStyles(styles)(SingleColorPalette);
