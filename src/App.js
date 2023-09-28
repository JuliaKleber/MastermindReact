import React, { useState, useEffect, useCallback } from "react";
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
const numberColors = colors.length;
// Die Anzahl der erlaubten Versuche
const numberTrials = 8;

function setColorsSolution() {
  // Per Zufall werden die Farben gesetzt,
  // die vom Benutzer zu erraten sind.
  let newSolution = [];
  for (let i = 0; i < 4; i++) {
    let dice = Math.floor(Math.random() * numberColors);
    newSolution.push(colors[dice]);
  }
  return newSolution;
}

function App() {
  const [chosenColor, setChosenColor] = useState("white");
  const handleColorSelection = (color) => {
    setChosenColor(color);
  };
  const [currentTrial, setCurrentTrial] = useState(1);
  const incrementCurrentTrial = (current) => {
    setCurrentTrial(current);
  };
  const [playAgain, setPlayAgain] = useState(false);
  const handlePlayAgain = useCallback((newGame) => {
    setPlayAgain(newGame);
  }, []);
  const handleResetGame = useCallback((newResetGame) => {
    setResetGame(newResetGame);
  }, []);
  const [resetGame, setResetGame] = useState(false);
  const [solution, setSolution] = useState(() => setColorsSolution());

  useEffect(() => {
    if (playAgain === true) {
      setResetGame(true);
      setSolution(setColorsSolution());
      setCurrentTrial(1);
      setPlayAgain(false);
    }
  }, [playAgain]);

  return (
    <>
      <main>
        <div id="gap1"></div>
        <div id="gap2">placeholder</div>
        <SixColors
          colors={colors}
          onColorSelect={handleColorSelection}
          numberColors={numberColors}
          resetGame={resetGame}
        />
        <div id="trials">
          {Array(numberTrials)
            .fill()
            .map((_, index) => (
              <Trial
                key={`trial${index}`}
                numberTrial={index + 1}
                currentTrial={currentTrial}
                solution={solution}
                chosenColor={chosenColor}
                numberTrials={numberTrials}
                onIncremented={incrementCurrentTrial}
                onPlayAgain={handlePlayAgain}
                onResetGame={handleResetGame}
                resetGame={resetGame}
              />
            ))}
        </div>
        <Instruction numberTrials={numberTrials} />
      </main>
    </>
  );
}

export default App;
