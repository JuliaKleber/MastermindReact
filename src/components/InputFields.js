import React, { useState, useEffect } from "react";

function InputFields({
  currentTrial,
  numberTrial,
  chosenColor,
  numberInputFields,
  onChosenColors,
  resetGame,
}) {
  const [chosenColors, setChosenColors] = useState(() =>
    Array(numberInputFields).fill("white")
  );

  // Wenn eine Kachel des Versuchs angeklickt wird,
  // wird die chosenColor im Array chosenColors
  // unter dem entsprechendem Index gespeichert.
  const setColor = (index) => {
    if (currentTrial === numberTrial) {
      const newChosenColors = [...chosenColors];
      newChosenColors[index] = chosenColor;
      setChosenColors(newChosenColors);
      onChosenColors(newChosenColors);
    }
  };

  // Setzt das Spiel zurück.
  useEffect(() => {
    if (resetGame === true) {
      setChosenColors(Array(numberInputFields).fill("white"));
    }
  }, [resetGame, numberInputFields]);

  return (
    <div>
      {chosenColors.map((color, index) => (
        <button
          className="input-field"
          key={index}
          style={{ backgroundColor: color }}
          onClick={() => setColor(index)}
        ></button>
      ))}
    </div>
  );
}

export default InputFields;
