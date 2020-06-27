import React, { Component } from "react";
import "./PaletteCard.css";

class PaletteCard extends Component {
  render() {
    return (
      <div
        style={{ background: this.props.background }}
        className="PaletteCard"
      >
        <span>{this.props.name}</span>
        <span>More</span>
      </div>
    );
  }
}

export default PaletteCard;
