import React from "react";
import { Route, Switch } from "react-router-dom";
import Palette from "./Palette";
import seedPalettes from "./seedPalettes";
import { generatePalette } from "./colorHelpers";

function App() {
  return (
    <Switch>
      <Route exact path="/" />
      <Route exact path="/palette/:id" />
    </Switch>
    // <div>
    //   <Palette palette={generatePalette(seedPalettes[4])} />
    // </div>
  );
}

export default App;
