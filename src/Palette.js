import React, { Component } from "react";
import PalletCard from "./PaletteCard";
import "rc-slider/assets/index.css";
import "./Palette.css";
import Slider from "rc-slider";

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
        <div className="slider">
          <Slider
            defaultValue={level}
            min={100}
            max={900}
            step={100}
            onAfterChange={this.changeLevel}
          />
        </div>
        {/* Navbar */}
        <div className="Palette-colors">{PalletCards}</div>
        {/* Footer */}
      </div>
    );
  }
}

export default Palette;
