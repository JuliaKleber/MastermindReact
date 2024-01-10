// Represents the numberTrial-th trial.
// The user guesses are shown as four colored boxes.
// There is also an output message that tells the user how good the guess was.

import React from "react";
import InputFields from "./InputFields";
import OutputHowGoodWasYourProposal from "./OutputHowGoodWasYourProposal";

const OldGuessTrial = ({
  numberTrial,
  currentTrial,
  userGuesses,
  qualityOfGuesses,
}) => {

  return (
    <div className="card small-card">
      <h3>{numberTrial + 1}. Versuch</h3>
      <InputFields
        numberTrial={numberTrial}
        currentTrial={currentTrial}
        userGuesses={userGuesses}
      />
      <OutputHowGoodWasYourProposal
        qualityOfGuesses={qualityOfGuesses}
        numberTrial={numberTrial}
        currentTrial={currentTrial}
      />
    </div>
  );
};

export default OldGuessTrial;
