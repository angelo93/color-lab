import React, { Component } from "react";
import PalletCard from "./PaletteCard";
import "./Palette.css";

class Palette extends Component {
  render() {
    const PalletCards = this.props.colors.map((color) => (
      <PalletCard background={color.color} name={color.name} />
    ));

    return (
      <div className="Palette">
        {/* Navbar */}
        <div className="Palette-colors">{PalletCards}</div>
        {/* Footer */}
      </div>
    );
  }
}

export default Palette;
