import React, { useState } from "react";
import SixColors from "./components/SixColors";
import Trial from "./components/Trial";
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
const numberColors = colors.length;
// Die Anzahl der erlaubten Versuche
const numberTrials = 8;
// Die Anzahl der zu erratenden Farben
const numberInputFields = 4;

// Per Zufall werden die Farben gesetzt,
// die vom Benutzer zu erraten sind.
const setColorsSolution = () => {
  let newSolution = [];
  for (let i = 0; i < numberInputFields; i++) {
    let dice = Math.floor(Math.random() * numberColors);
    newSolution.push(colors[dice]);
  }
  return newSolution;
};

function App() {
  const [currentColor, setCurrentColor] = useState("white");
  const [currentTrial, setCurrentTrial] = useState(1);
  const [isResetGame, setIsResetGame] = useState(false);
  const [solution, setSolution] = useState(() => setColorsSolution());

  // Falls der Spieler noch mal spielen will, wird das Spiel zurückgesetzt.
  const handleResetGame = () => {
    setSolution(setColorsSolution());
    setCurrentTrial(1);
    setIsResetGame(true);
  };

  return (
    <>
      <main>
        <SixColors
          colors={colors}
          numberColors={numberColors}
          setCurrentColor={setCurrentColor}
          isResetGame={isResetGame}
        />
        <div id="trials">
          {Array(numberTrials)
            .fill()
            .map((_, index) => (
              <Trial
                key={`trial${index + 1}`}
                numberTrials={numberTrials}
                numberTrial={index + 1}
                currentTrial={currentTrial}
                setCurrentTrial={setCurrentTrial}
                solution={solution}
                currentColor={currentColor}
                numberInputFields={numberInputFields}
                onResetGameAppComponent={handleResetGame}
                isResetGame={isResetGame}
                setIsResetGame={setIsResetGame}
              />
            ))}
        </div>
        <Instruction
          numberTrials={numberTrials}
          numberInputFields={numberInputFields}
          numberColors={numberColors}
        />
      </main>
    </>
  );
}

export default App;
