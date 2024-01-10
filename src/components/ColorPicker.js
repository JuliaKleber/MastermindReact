// Represents the tiles with the colors
// which can be selected by the player by clicking.

import React, { useState } from "react";

const ColorPicker = ({ colors, colorsCount, setCurrentColor }) => {

  const [selectedButtons, setSelectedButtons] = useState(
    Array(colorsCount).fill(false)
  );

  const handleColorSelection = (index) => {
    let newButtonStates = [];
    if (selectedButtons[index] === true) {
      newButtonStates = Array(colorsCount).fill(false);
      setCurrentColor("white");
    } else {
      newButtonStates = Array(colorsCount).fill(false);
      newButtonStates[index] = true;
      setCurrentColor(colors[index]);
    }
    setSelectedButtons(newButtonStates);
  };

  return (
    <div className="card big-card" id="six-colors">
      {colors.map((fieldColor, index) => (
        <button
          key={index}
          className={
            selectedButtons[index] ? "color-selected" : "color-not-selected"
          }
          style={{ backgroundColor: fieldColor }}
          onClick={() => handleColorSelection(index)}
        ></button>
      ))}
    </div>
  );
};

export default ColorPicker;
