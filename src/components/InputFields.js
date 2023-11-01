import React from "react";

const InputFields = ({
  currentTrial,
  numberTrial,
  currentColor,
  chosenColors,
  setChosenColors,
}) => {
  // Wenn eine Kachel des Versuchs angeklickt wird,
  // wird die chosenColor im Array chosenColors
  // unter dem entsprechendem Index gespeichert.
  const setColor = (index) => {
    if (currentTrial === numberTrial) {
      const newChosenColors = [...chosenColors];
      newChosenColors[index] = currentColor;
      setChosenColors(newChosenColors);
    }
  };

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
