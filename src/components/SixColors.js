// Zeichnet am Anfang des Spiels am oberen Bildschirmrand
// 6 Quadrate mit unterschiedlichen Farben.

import React, { useState, useEffect } from "react";

function SixColors(props) {
  const colors = props.colors;
  const numberColors = props.numberColors;
  const [resetGame, setResetGame] = useState(props.resetGame);
  const [areButtonsSelected, setAreButtonsSelected] = useState(
    Array(numberColors).fill(false)
  );

  function handleButtonClick(index) {
    const newButtonStates = Array(numberColors).fill(false);
    newButtonStates[index] = true;
    setAreButtonsSelected(newButtonStates);
    props.onColorSelect(colors[index]);
  }

  useEffect(() => {
    if (resetGame === true) {
      setAreButtonsSelected(Array(numberColors).fill(false));
      setResetGame(false);
    }
  }, [resetGame, numberColors]);

  useEffect(() => {
    setResetGame(props.resetGame);
  }, [props.resetGame]);

  return (
    <div id="six-colors">
      {colors.map((color, index) => (
        <button
          key={index}
          className={
            areButtonsSelected[index] ? "color-selected" : "color-not-selected"
          }
          style={{ backgroundColor: color }}
          onClick={() => handleButtonClick(index)}
        ></button>
      ))}
    </div>
  );
}

export default SixColors;
