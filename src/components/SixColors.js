// Repräsentiert die Kacheln mit den Farben,
// die vom Spieler durch Anklicken selektiert werden können

import React, { useState, useEffect } from "react";

function SixColors({ colors, numberColors, resetGame, onColorSelect }) {
  const [areButtonsSelected, setAreButtonsSelected] = useState(
    Array(numberColors).fill(false)
  );

  useEffect(() => {
    resetGame && setAreButtonsSelected(Array(numberColors).fill(false));
  }, [resetGame, numberColors]);

  const handleColorSelection = (index) => {
    const newButtonStates = Array(numberColors).fill(false);
    newButtonStates[index] = true;
    setAreButtonsSelected(newButtonStates);
    onColorSelect(colors[index]);
  }

  return (
    <div className="box" id="six-colors">
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
}

export default SixColors;
