import React, { Component } from "react";
import Navbar from "./Navbar";
import PaletteFooter from "./PaletteFooter";
import PaletteCard from "./PaletteCard";

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
    const { format } = this.state;
    const { paletteName, emoji } = this.props.palette;

    const colorShadeCards = this._shades.map((color) => (
      <PaletteCard
        key={color.id}
        name={color.name}
        background={color[format]}
        showLink={false}
      />
    ));

    return (
      <div className="Palette">
        <Navbar handleChange={this.changeFormat} showSlider={false} />
        <div className="Palette-colors">{colorShadeCards}</div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default SingleColorPalette;
