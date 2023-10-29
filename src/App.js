import React, { useState, useEffect } from "react";
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
  const [isPlayAgain, setIsPlayAgain] = useState(false);
  const [solution, setSolution] = useState(() => setColorsSolution());

  // Falls der Spieler noch mal spielen will, wird das Spiel zurückgesetzt.
  useEffect(() => {
    if (isPlayAgain === true) {
      // setResetGame(true);
      setSolution(setColorsSolution());
      setCurrentTrial(1);
      // setIsPlayAgain(false);
    }
  }, [isPlayAgain]);

  // // Falls der Spieler noch mal spielen will, wird das Spiel zurückgesetzt.
  // const handleIsPlayAgain = useCallback((newGame) => {
  //   setIsPlayAgain(newGame);
  // }, []);

  // // Falls der Spieler noch mal spielen will, wird das Spiel zurückgesetzt.
  // const handleResetGame = useCallback((newResetGame) => {
  //   setResetGame(newResetGame);
  // }, []);

  // Falls der Spieler noch mal spielen will, wird das Spiel zurückgesetzt.
  // useEffect(() => {
  //   if (isPlayAgain === true) {
  //     // setResetGame(true);
  //     setSolution(setColorsSolution());
  //     setCurrentTrial(1);
  //     setIsPlayAgain(false);
  //   }
  // }, [isPlayAgain]);

  return (
    <>
      <main>
        <SixColors
          colors={colors}
          numberColors={numberColors}
          setCurrentColor={setCurrentColor}
          isPlayAgain={isPlayAgain}
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
                isPlayAgain={isPlayAgain}
                setIsPlayAgain={setIsPlayAgain}
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
