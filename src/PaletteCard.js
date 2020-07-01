// Main Vendors
import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import classNames from "classnames";
import { withStyles } from "@material-ui/styles";
// Styles
import styles from "./styles/PaletteCardStyles";

class PaletteCard extends Component {
  constructor(props) {
    super(props);
    this.state = { copied: false };
    this.changeCopyState = this.changeCopyState.bind(this);
  }

  changeCopyState() {
    this.setState({ copied: true }, () => {
      setTimeout(() => this.setState({ copied: false }), 1500);
    });
  }

  render() {
    const {
      name,
      background,
      colorId,
      paletteId,
      showMultiColorPalette,
      classes,
    } = this.props;
    const { copied } = this.state;

    return (
      <div style={{ background }} className={classes.PaletteCard}>
        <div
          style={{ background }}
          className={classNames(classes.copyOverlay, {
            [classes.showOverlay]: copied,
          })}
        />
        <div
          className={classNames(classes.copyMsg, {
            [classes.showMsg]: copied,
          })}
        >
          <h1>copied!</h1>
          <p className={classes.copyText}>{background}</p>
        </div>
        <div>
          <div className={classes.paletteContent}>
            <span className={classes.colorName}>{name}</span>
          </div>
          <CopyToClipboard text={background} onCopy={this.changeCopyState}>
            <button className={classes.copyButton}>Copy</button>
          </CopyToClipboard>
        </div>
        {showMultiColorPalette && (
          <Link
            to={`/palette/${paletteId}/${colorId}`}
            onClick={(e) => e.stopPropagation()}
          >
            <span className={classes.seeMore}>MORE</span>
          </Link>
        )}
      </div>
    );
  }
}

export default withStyles(styles)(PaletteCard);
