// Represents the currentTrial.
// The user can place colors in the fields.
// By clicking the 'submit' button, the attempted solution is checked
// and an appropriate message is displayed.

import React from "react";
import InputFields from "./InputFields";
import OutputHowGoodWasYourProposal from "./OutputHowGoodWasYourProposal";

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
  hasWon,
  setHasWon,
  hasLost,
  setHasLost,
}) => {

  const isLastTrial = currentTrial === numberTrials - 1;

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
    // if (correctGuesses !== numberInputFields && !isLastTrial) {
       setCurrentTrial(currentTrial => currentTrial + 1);
    // }
  };

  return (
    <div className={"card big-card column-container"}>
      <h3>{numberTrial + 1}. Versuch</h3>
      <InputFields
        currentTrial={currentTrial}
        numberTrial={numberTrial}
        currentColor={currentColor}
        userGuesses={userGuesses}
        setUserGuesses={setUserGuesses}
      />
      {(hasLost || hasWon) && <OutputHowGoodWasYourProposal
        numberTrial={numberTrial}
        currentTrial={currentTrial}
        qualityOfGuesses={qualityOfGuesses}
      />}
      {!hasWon && !hasLost &&
        <button className="send-button" onClick={handleProposalCheck}>
          absenden
        </button>
      }
    </div>
  );
};

export default CurrentGuessTrial;
