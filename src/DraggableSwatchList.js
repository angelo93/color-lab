// Main Vendors
import React from "react";
import { SortableContainer } from "react-sortable-hoc";
// Components
import DraggablePaletteSwatch from "./DraggablePaletteSwatch";

const DraggableSwatchList = SortableContainer(({ colors, removeSwatch }) => {
  return (
    <div style={{ height: "100%" }}>
      {colors.map((color, i) => (
        <DraggablePaletteSwatch
          index={i}
          key={color.name}
          color={color.color}
          name={color.name}
          handleClick={() => removeSwatch(color.name)}
        />
      ))}
    </div>
  );
});

export default DraggableSwatchList;
