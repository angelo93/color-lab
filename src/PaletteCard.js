import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Link } from "react-router-dom";
import styles from "./styles/PaletteCardStyles";
import { withStyles } from "@material-ui/styles";

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
          className={`${classes.copyOverlay} ${copied && classes.showOverlay}`}
        />
        <div className={`${classes.copyMsg} ${copied && classes.showMsg}`}>
          <h1>copied!</h1>
          <p className={classes.copyText}>{this.props.background}</p>
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
