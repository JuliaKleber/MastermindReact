// Represents the currentTrial.
// The user can place colors in the fields.
// By clicking the 'submit' button, the attempted solution is checked
// and an appropriate message is displayed.

import React, { useState } from "react";
import InputFields from "./InputFields";
import OutputHowGoodWasYourProposal from "./OutputHowGoodWasYourProposal";
import OutputSolutionFound from "./OutputSolutionFound";
import OutputOutOfTurns from "./OutputOutOfTurns";

const CurrentGuessTrial = ({
  numberTrials,
  numberTrial,
  currentTrial,
  setCurrentTrial,
  currentColor,
  solution,
  userGuesses,
  setUserGuesses,
  qualityOfGuesses,
  setQualityOfGuesses,
  numberInputFields,
  onResetGame,
}) => {

  const isLastTrial = currentTrial === numberTrials - 1;
  const [hasWon, setHasWon] = useState(false);
  const [hasLost, setHasLost] = useState(false);
  const [endOfGame, setEndOfGame] = useState(false);

  const handleProposalCheck = () => {
    // If two colors occur both in the solution and in the solution proposal
    // in the same place, they are removed from the two arrays.
    const reducedSolution = solution.filter(
      (color, i) => color !== userGuesses[currentTrial][i]
    );
    const reducedGuess = userGuesses[currentTrial].filter(
      (color, i) => color !== solution[i]
    );
    const correctGuesses = solution.length - reducedSolution.length;
    // Evaluates how many colors are in both solutions,
    // but are in different places.
    let wrongPlaceGuesses = 0;
    for (let i = reducedSolution.length - 1; i >= 0; i--) {
      for (let j = reducedSolution.length - 1; j >= 0; j--) {
        if (reducedSolution[i] === reducedGuess[j]) {
          wrongPlaceGuesses += 1;
          reducedSolution.splice(i, 1);
          reducedGuess.splice(j, 1);
        }
      }
    }
    setQualityOfGuesses([...qualityOfGuesses, [correctGuesses, wrongPlaceGuesses]]);
    // Either the end of the game is triggered
    // or CurrentTrial is increased by one.
    setHasWon(correctGuesses === numberInputFields);
    setHasLost(correctGuesses !== numberInputFields && isLastTrial);
    correctGuesses === numberInputFields || isLastTrial
      ? setEndOfGame(true)
      : setCurrentTrial(currentTrial => currentTrial + 1);
  };

  const resetGame = () => {
    setEndOfGame(false);
    setHasWon(false);
    setHasLost(false);
    onResetGame();
  }

  const output = () => {
    if (hasLost) {
      return (
        <>
          <OutputHowGoodWasYourProposal
            numberTrial={numberTrial}
            currentTrial={currentTrial}
            qualityOfGuesses={qualityOfGuesses}
          />
          <OutputOutOfTurns solution={solution} />
        </>
      )
    }
    if (hasWon) {
      return <OutputSolutionFound />
    }
    return null;
  }

  const button = () => {
    if (!endOfGame) {
      return (
        <button className="send-button" onClick={handleProposalCheck}>
          absenden
        </button>
      )
    } else {
      return (
        <div className="container">
          <p>Möchtest du noch mal spielen?</p>
          <button onClick={() => resetGame()}>Ja</button>
        </div>
      )
    }
  }

  return (
    <div className={"card big-card container"}>
      <h3>{numberTrial + 1}. Versuch</h3>
      <InputFields
        currentTrial={currentTrial}
        numberTrial={numberTrial}
        currentColor={currentColor}
        userGuesses={userGuesses}
        setUserGuesses={setUserGuesses}
      />
      {output()}
      {button()}
    </div>
  );
};

export default CurrentGuessTrial;
