// Represents the input fields of the numberTrial-th trial.

import React from "react";

const InputFields = ({
  currentTrial,
  numberTrial,
  currentColor,
  userGuesses,
  setUserGuesses,
}) => {

  // If a field is clicked and the field belongs to the current trial,
  // the currentColor is set to the field and saved to the userGuesses.
  const setColor = (index) => {
    if (currentTrial === numberTrial) {
      const chosenColors = [...userGuesses[currentTrial]];
      chosenColors[index] = currentColor;
      let newUserGuesses = [...userGuesses];
      newUserGuesses[currentTrial] = chosenColors;
      setUserGuesses(newUserGuesses);
    }
  };

  return (
    <div>
      {userGuesses[numberTrial].map((color, index) => (
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
