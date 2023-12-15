// Repräsentiert die Kacheln mit den Farben,
// die vom Spieler durch Anklicken selektiert werden können

import React, { useState } from "react";

const ColorPicker = ({
  colors,
  countColors,
  setCurrentColor,
}) => {
  const [areButtonsSelected, setAreButtonsSelected] = useState(
    Array(countColors).fill(false)
  );

  const handleColorSelection = (index) => {
    let newButtonStates = [];
    if (areButtonsSelected[index] === true) {
      newButtonStates = Array(countColors).fill(false);
      setCurrentColor("white");
    } else {
      newButtonStates = Array(countColors).fill(false);
      newButtonStates[index] = true;
      setCurrentColor(colors[index]);
    }
    setAreButtonsSelected(newButtonStates);
  };

  return (
    <div className="card" id="six-colors">
      {colors.map((color, index) => (
        <button
          key={index}
          className={
            areButtonsSelected[index] ? "color-selected" : "color-not-selected"
          }
          style={{ backgroundColor: color }}
          onClick={() => handleColorSelection(index)}
        ></button>
      ))}
    </div>
  );
};

export default ColorPicker;
