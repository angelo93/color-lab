import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ChromePicker } from "react-color";

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
    const { paletteIsFull } = this.props;
    const { currentSwatch, newSwatchName } = this.state;

    return (
      <div>
        <ChromePicker
          color={currentSwatch}
          onChangeComplete={this.updateCurrentSwatch}
        />
        <ValidatorForm onSubmit={this.handleSubmit}>
          <TextValidator
            value={newSwatchName}
            name="newSwatchName"
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

export default SwatchPickerForm;
