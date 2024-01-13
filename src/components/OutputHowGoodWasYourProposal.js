import React from "react";

const OutputHowGoodWasYourProposal = ({
  qualityOfGuesses,
  numberTrial,
  currentTrial
}) => {

  const colorInRightPlace = qualityOfGuesses[numberTrial][0] === 1 ? "Farbe" : "Farben";
  const colorInWrongPlace = qualityOfGuesses[numberTrial][1] === 1 ? "Farbe" : "Farben";
  const verbInRightPlace = qualityOfGuesses[numberTrial][0] === 1 ? "ist" : "sind";
  const verbInWrongPlace = qualityOfGuesses[numberTrial][1] === 1 ? "ist" : "sind";

  const output = () => {
    return numberTrial === currentTrial ? (
      <div>
        <p className="centered-text">
          <b>{qualityOfGuesses[numberTrial][0]}</b> {colorInRightPlace} {verbInRightPlace} <b>richtig</b> platziert und<br />
          <b>{qualityOfGuesses[numberTrial][1]}</b> {colorInWrongPlace} {verbInWrongPlace} an der <b>falschen</b> Stelle
        </p>
      </div>
    ) : (
      <div>
        <p>
          <b>{qualityOfGuesses[numberTrial][0]}</b> richtige Stelle<br />
          <b>{qualityOfGuesses[numberTrial][1]}</b> falsche Stelle
        </p>
      </div>
    )
  }

  return output();
}

export default OutputHowGoodWasYourProposal;
