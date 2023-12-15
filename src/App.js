import React, { useState } from "react";
import ColorPicker from "./components/ColorPicker";
import GuessTrial from "./components/GuessTrial";
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
const countColors = colors.length;
// Die Anzahl der erlaubten Versuche
const numberTrials = 8;
// Die Anzahl der zu erratenden Farben
const numberInputFields = 4;

// Per Zufall werden die Farben gesetzt,
// die vom Benutzer zu erraten sind.
const setColorsSolution = () => {
  let newSolution = [];
  for (let i = 0; i < numberInputFields; i++) {
    let dice = Math.floor(Math.random() * countColors);
    newSolution.push(colors[dice]);
  }
  return newSolution;
};

const App = () => {
  const [currentColor, setCurrentColor] = useState("white");
  const [currentTrial, setCurrentTrial] = useState(1);
  const [solution, setSolution] = useState(() => setColorsSolution());
  const [endOfGame, setEndOfGame] = useState(false);
  const [isResetGame, setIsResetGame] = useState(false);

  // Falls der Spieler noch mal spielen will, wird das Spiel zurückgesetzt.
  const handleResetGame = () => {
    setSolution(setColorsSolution());
    setCurrentTrial(1);
    setIsResetGame(true);
  };

  return (
    <>
      <main>
        <ColorPicker
          colors={colors}
          numberColors={countColors}
          setCurrentColor={setCurrentColor}
        />
        <div id="trials">
          {Array(numberTrials)
            .fill()
            .map((_, index) => (
              <GuessTrial
                key={`trial${index + 1}`}
                numberTrials={numberTrials}
                numberTrial={index + 1}
                currentTrial={currentTrial}
                setCurrentTrial={setCurrentTrial}
                solution={solution}
                currentColor={currentColor}
                numberInputFields={numberInputFields}
                onResetGame={handleResetGame}
                endOfGame={endOfGame}
                setEndOfGame={setEndOfGame}
                isResetGame={isResetGame}
                setIsResetGame={setIsResetGame}
              />
            ))}
        </div>
        <Instruction
          numberTrials={numberTrials}
          numberInputFields={numberInputFields}
          numberColors={countColors}
        />
      </main>
    </>
  );
};

export default App;
