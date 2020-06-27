import React from "react";
import Palette from "./Palette";
import seedPalettes from "./seedPalettes";
import { generatePalette } from "./colorHelpers";

function App() {
  console.log(generatePalette(seedPalettes[4]));
  return (
    <div>
      <Palette {...seedPalettes[5]} />
    </div>
  );
}

export default App;
