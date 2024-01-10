import React, { useState } from "react";
import ColorPicker from "./components/ColorPicker";
import CurrentGuessTrial from "./components/CurrentGuessTrial";
import OldGuessTrial from "./components/OldGuessTrial";
import Instruction from "./components/Instruction";

// Die vom Spiel erlaubten Farben
const colors = [
  "yellow",
  "orange",
  "red",
  "mediumorchid",
  "royalblue",
  "limegreen",
];

// Die Anzahl der erlaubten Farben
const colorsCount = colors.length;
// Die Anzahl der erlaubten Versuche
const numberTrials = 8;
// Die Anzahl der zu erratenden Farben
const numberInputFields = 4;

// Per Zufall werden die Farben gesetzt,
// die vom Benutzer zu erraten sind.
const setColorsSolution = () => {
  let newSolution = [];
  for (let i = 0; i < numberInputFields; i++) {
    let dice = Math.floor(Math.random() * colorsCount);
    newSolution.push(colors[dice]);
  }
  return newSolution;
};

const App = () => {
  const [currentColor, setCurrentColor] = useState("white");
  const [currentTrial, setCurrentTrial] = useState(0);
  const [solution, setSolution] = useState(() => setColorsSolution());
  const [userGuesses, setUserGuesses] = useState(() =>
    Array.from({ length: numberTrials }, () => Array(numberInputFields).fill("white"))
  );
  const [qualityOfGuesses, setQualityOfGuesses] = useState([]);

  // Falls der Spieler noch mal spielen will, wird das Spiel zurückgesetzt.
  const handleResetGame = () => {
    setSolution(setColorsSolution());
    setCurrentTrial(0);
    setUserGuesses(() => Array.from({ length: numberTrials }, () => Array(numberInputFields).fill("white")));
    setQualityOfGuesses([]);
  };

  return (
    <div className="main-container">
      <ColorPicker
        colors={colors}
        colorsCount={colorsCount}
        setCurrentColor={setCurrentColor}
      />
      <CurrentGuessTrial
        colors={colors}
        currentColor={currentColor}
        numberTrials={numberTrials}
        numberTrial={currentTrial}
        currentTrial={currentTrial}
        setCurrentTrial={setCurrentTrial}
        solution={solution}
        userGuesses={userGuesses}
        setUserGuesses={setUserGuesses}
        qualityOfGuesses={qualityOfGuesses}
        setQualityOfGuesses={setQualityOfGuesses}
        numberInputFields={numberInputFields}
        onResetGame={handleResetGame}
      />
      <div id="trials">
        {Array(currentTrial)
          .fill()
          .map((_, index) => (
            <OldGuessTrial
              key={`trial${index}`}
              currentColor={currentColor}
              numberTrials={numberTrials}
              numberTrial={index}
              currentTrial={currentTrial}
              userGuesses={userGuesses}
              qualityOfGuesses={qualityOfGuesses}
              numberInputFields={numberInputFields}
            />
          ))}
      </div>
      <Instruction
        numberTrials={numberTrials}
        numberInputFields={numberInputFields}
        colorsCount={colorsCount}
      />
    </div>
  );
};

export default App;
