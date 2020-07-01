import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ChromePicker } from "react-color";
import { withStyles } from "@material-ui/core/styles";

import styles from "./styles/SwatchPickerFormStyles";

class SwatchPickerForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSwatch: "teal",
      newSwatchName: "",
    };

    this.updateCurrentSwatch = this.updateCurrentSwatch.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    ValidatorForm.addValidationRule("isSwatchNameUnique", (value) => {
      return this.props.colors.every(
        ({ name }) => name.toLowerCase() !== value.toLowerCase()
      );
    });
    ValidatorForm.addValidationRule("isSwatchUnique", (value) => {
      return this.props.colors.every(
        ({ color }) => color !== this.state.currentSwatch
      );
    });
  }

  updateCurrentSwatch(newSwatch) {
    this.setState({ currentSwatch: newSwatch.hex });
  }

  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }

  handleSubmit() {
    const newSwatch = {
      color: this.state.currentSwatch,
      name: this.state.newSwatchName,
    };
    this.props.addNewSwatch(newSwatch);
    this.setState({ newSwatchName: "" });
  }

  render() {
    const { paletteIsFull, classes } = this.props;
    const { currentSwatch, newSwatchName } = this.state;

    return (
      <div>
        <ChromePicker
          color={currentSwatch}
          onChangeComplete={this.updateCurrentSwatch}
          className={classes.picker}
        />
        <ValidatorForm onSubmit={this.handleSubmit}>
          <TextValidator
            className={classes.swatchNameInput}
            placeholder="Swatch Name"
            value={newSwatchName}
            name="newSwatchName"
            variant="filled"
            margin="normal"
            onChange={this.handleChange}
            validators={["required", "isSwatchNameUnique", "isSwatchUnique"]}
            errorMessages={[
              "Enter a name!",
              "Name already exists!",
              "Swatch already used!",
            ]}
          />
          <Button
            variant="contained"
            type="submit"
            color="primary"
            disabled={paletteIsFull}
            className={classes.addSwatch}
            style={{
              backgroundColor: paletteIsFull ? "grey" : currentSwatch,
            }}
          >
            {paletteIsFull ? "Palette Full" : "Add Swatch"}
          </Button>
        </ValidatorForm>
      </div>
    );
  }
}

export default withStyles(styles)(SwatchPickerForm);
