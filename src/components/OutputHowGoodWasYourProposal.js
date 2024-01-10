import React from "react";

const OutputHowGoodWasYourProposal = ({
  qualityOfGuesses,
  numberTrial,
}) => {

  const colorInRightPlace = qualityOfGuesses[numberTrial][0] === 1 ? "Farbe" : "Farben";
  const colorInWrongPlace = qualityOfGuesses[numberTrial][1] === 1 ? "Farbe" : "Farben";
  const verbInRightPlace = qualityOfGuesses[numberTrial][0] === 1 ? "ist" : "sind";
  const verbInWrongPlace = qualityOfGuesses[numberTrial][1] === 1 ? "ist" : "sind";

  return (
    <div>
      <p>
        <b>{qualityOfGuesses[numberTrial][0]}</b> {colorInRightPlace} {verbInRightPlace}{" "}
        <b>richtig</b> platziert und
        <br />
        <b>{qualityOfGuesses[numberTrial][1]}</b> {colorInWrongPlace} {verbInWrongPlace} an
        der <b>falschen</b> Stelle
      </p>
    </div>
  );
}

export default OutputHowGoodWasYourProposal;
