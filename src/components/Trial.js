// Repräsentiert den numberTrial-ten Versuch.
// Der Nutzer kann vier Farben in die Kästchen platzieren.
// Durch Klicken des "absenden" Buttons wird der
// Lösungsversuch überprüft und eine entsprechende Nachricht ausgegeben.

import React, { useState, useEffect } from "react";
import InputFields from "./InputFields";
import CheckProposedSolutionButton from "./CheckProposedSolutionButton";
import Output from "./Output";
import QuestionPlayAgain from "./QuestionPlayAgain";

function Trial({
  numberTrials,
  numberTrial,
  currentTrial,
  setCurrentTrial,
  currentColor,
  solution,
  numberInputFields,
  isPlayAgain,
  setIsPlayAgain,
}) {
  const [chosenColors, setChosenColors] = useState(
    Array(numberInputFields).fill("white")
  );
  const [proposalSent, setProposalSent] = useState(false);
  const [numberInRightPlace, setNumberInRightPlace] = useState(0);
  const [numberInWrongPlace, setNumberInWrongPlace] = useState(0);
  const [endOfGame, setEndOfGame] = useState(false);

  // Wenn sich der aktuelle Versuch ändert,
  // werden alle Versuche bis zum aktuellen Versuch angezeigt.
  const isShown = numberTrial <= currentTrial;

  // Setzt das Spiel zurück.
  useEffect(() => {
    if (isPlayAgain) {
      setChosenColors(Array(numberInputFields).fill("white"));
      setProposalSent(false);
    }
  }, [isPlayAgain, setIsPlayAgain, numberInputFields]);

  return (
    <div className={isShown ? "trial-visible" : "trial-not-visible"}>
      <h3>{numberTrial}. Versuch</h3>
      <InputFields
        currentTrial={currentTrial}
        numberTrial={numberTrial}
        chosenColor={currentColor}
        numberInputFields={numberInputFields}
        onChosenColors={(newChosenColors) => setChosenColors(newChosenColors)}
        isPlayAgain={isPlayAgain}
      />
      <CheckProposedSolutionButton
        solution={solution}
        chosenColors={chosenColors}
        numberInputFields={numberInputFields}
        currentTrial={currentTrial}
        setCurrentTrial={setCurrentTrial}
        numberTrials={numberTrials}
        isPlayAgain={isPlayAgain}
        onNumberInRightPlace={(state) => setNumberInRightPlace(state)}
        onNumberInWrongPlace={(state) => setNumberInWrongPlace(state)}
        onProposalSent={(state) => setProposalSent(state)}
        setEndOfGame={setEndOfGame}
        setIsPlayAgain={setIsPlayAgain}
      />
      {proposalSent && (
        <Output
          numberInRightPlace={numberInRightPlace}
          numberInWrongPlace={numberInWrongPlace}
          numberInputFields={numberInputFields}
          currentTrial={currentTrial}
          numberTrial={numberTrial}
          chosenColors={chosenColors}
          numberTrials={numberTrials}
          solution={solution}
          proposalSent={proposalSent}
        />
      )}
      {endOfGame && <QuestionPlayAgain setIsPlayAgain={setIsPlayAgain} />}
    </div>
  );
}

export default Trial;
