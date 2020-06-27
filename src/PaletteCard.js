import React, { Component } from "react";
import "./PaletteCard.css";
import { CopyToClipboard } from "react-copy-to-clipboard";

class PaletteCard extends Component {
  render() {
    const { name, background } = this.props;
    return (
      <div style={{ background }} className="PaletteCard">
        <div className="copy-container">
          <div className="palette-content">
            <span>{name}</span>
          </div>
          <CopyToClipboard text={background}>
            <button className="copy-button">Copy</button>
          </CopyToClipboard>
        </div>
        <span className="see-more">More</span>
      </div>
    );
  }
}

export default PaletteCard;
