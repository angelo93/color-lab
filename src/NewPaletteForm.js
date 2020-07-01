import React, { Component } from "react";
import classNames from "classnames";
import { withStyles } from "@material-ui/core/styles";
import PaletteFormNav from "./PaletteFormNav";
import SwatchPickerForm from "./SwatchPickerForm";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import DraggableSwatchList from "./DraggableSwatchList";
import { arrayMove } from "react-sortable-hoc";

const drawerWidth = 400;

const styles = (theme) => ({
  root: {
    display: "flex",
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    display: "flex",
    alignItems: "center",
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: "0 8px",
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    padding: theme.spacing.unit * 3,
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  container: {
    width: "90%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  btns: {
    width: "100%",
  },
  btn: {
    width: "50%",
  },
});

class NewPaletteForm extends Component {
  static defaultProps = {
    maxSwatches: 20,
  };

  constructor(props) {
    super(props);
    this.state = {
      open: true,
      colors: this.props.palettes[0].colors,
    };
    this.addNewSwatch = this.addNewSwatch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.removeSwatch = this.removeSwatch.bind(this);
    this.clearSwatches = this.clearSwatches.bind(this);
    this.addRandomSwatch = this.addRandomSwatch.bind(this);
  }

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  addNewSwatch(newSwatch) {
    this.setState({
      colors: [...this.state.colors, newSwatch],
      newSwatchName: "",
    });
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit(newPaletteName) {
    const newPalette = {
      paletteName: newPaletteName,
      id: newPaletteName.toLowerCase().replace(/ /g, "-"),
      colors: this.state.colors,
    };
    this.props.savePalette(newPalette);
    this.props.history.push("/");
  }

  removeSwatch(swatchName) {
    this.setState({
      colors: this.state.colors.filter((color) => color.name !== swatchName),
    });
  }

  clearSwatches() {
    this.setState({ colors: [] });
  }

  addRandomSwatch() {
    const allSwatches = this.props.palettes.map((p) => p.colors).flat();
    var rand = Math.floor(Math.random() * allSwatches.length);
    const randomSwatch = allSwatches[rand];

    this.setState({ colors: [...this.state.colors, randomSwatch] });
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ colors }) => ({
      colors: arrayMove(colors, oldIndex, newIndex),
    }));
  };

  render() {
    const { classes, maxSwatches, palettes } = this.props;
    const { open, colors } = this.state;
    const paletteIsFull = colors.length >= maxSwatches;

    return (
      <div className={classes.root}>
        <PaletteFormNav
          open={open}
          palettes={palettes}
          handleSubmit={this.handleSubmit}
          handleDrawerOpen={this.handleDrawerOpen}
        />
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <div className={classes.container}>
            <Typography variant="h4" gutterBottom>
              Design Your Palette
            </Typography>
            <div className={classes.btns}>
              <Button
                className={classes.btn}
                variant="contained"
                color="secondary"
                onClick={this.clearSwatches}
              >
                Clear Palette
              </Button>
              <Button
                className={classes.btn}
                variant="contained"
                color="primary"
                onClick={this.addRandomSwatch}
                disabled={paletteIsFull}
              >
                Random Swatch
              </Button>
            </div>
            <SwatchPickerForm
              paletteIsFull={paletteIsFull}
              addNewSwatch={this.addNewSwatch}
              colors={colors}
            />
          </div>
        </Drawer>
        <main
          className={classNames(classes.content, {
            [classes.contentShift]: open,
          })}
        >
          <div className={classes.drawerHeader} />
          <DraggableSwatchList
            colors={colors}
            removeSwatch={this.removeSwatch}
            axis="xy"
            onSortEnd={this.onSortEnd}
          />
        </main>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(NewPaletteForm);
