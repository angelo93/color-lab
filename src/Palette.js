import React, { Component } from "react";
import PalletCard from "./PaletteCard";
import Navbar from "./Navbar";
import "./Palette.css";

class Palette extends Component {
  constructor(props) {
    super(props);
    this.state = { level: 500 };
    this.changeLevel = this.changeLevel.bind(this);
  }

  changeLevel(newLevel) {
    this.setState({ level: newLevel });
  }

  render() {
    const { colors } = this.props.palette;
    const { level } = this.state;
    const PalletCards = colors[level].map((color) => (
      <PalletCard background={color.hex} name={color.name} />
    ));

    return (
      <div className="Palette">
        <Navbar level={level} changeLevel={this.changeLevel} />
        <div className="Palette-colors">{PalletCards}</div>
        {/* Footer */}
      </div>
    );
  }
}

export default Palette;
