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
// Die Anzahl der erlaubten Farben
const numberColors = colors.length;
// Die Anzahl der erlaubten Versuche
const numberTrials = 8;
// Die Anzahl der zu erratenden Farben
const numberInputFields = 4;

// Per Zufall werden die Farben gesetzt,
// die vom Benutzer zu erraten sind.
function setColorsSolution() {
  let newSolution = [];
  for (let i = 0; i < numberInputFields; i++) {
    let dice = Math.floor(Math.random() * numberColors);
    newSolution.push(colors[dice]);
  }
  return newSolution;
}

function App() {
  const [chosenColor, setChosenColor] = useState("white");
  const [currentTrial, setCurrentTrial] = useState(1);
  const [playAgain, setPlayAgain] = useState(false);
  const [resetGame, setResetGame] = useState(false);
  const [solution, setSolution] = useState(() => setColorsSolution());

  // Hier wird die Farbe gespeichert,
  // die der Spieler mittels der Komponente sixColors auswählt
  const handleColorSelection = useCallback((color) => {
    setChosenColor(color);
  }, []);

  // In currentTrial wird gespeichert in welchem Versuch sich der Spieler befindet
  const incrementCurrentTrial = useCallback((current) => {
    setCurrentTrial(current);
  }, []);

  // Falls der Spieler noch mal spielen will, wird das Spiel zurückgesetzt.
  const handlePlayAgain = useCallback((newGame) => {
    setPlayAgain(newGame);
  }, []);

  // Falls der Spieler noch mal spielen will, wird das Spiel zurückgesetzt.
  const handleResetGame = useCallback((newResetGame) => {
    setResetGame(newResetGame);
  }, []);

  // Falls der Spieler noch mal spielen will, wird das Spiel zurückgesetzt.
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
                key={`trial${index + 1}`}
                numberTrial={index + 1}
                currentTrial={currentTrial}
                solution={solution}
                chosenColor={chosenColor}
                numberTrials={numberTrials}
                numberInputFields={numberInputFields}
                onIncremented={incrementCurrentTrial}
                onPlayAgain={handlePlayAgain}
                onResetGame={handleResetGame}
                resetGame={resetGame}
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
