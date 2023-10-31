import React from "react";

function OutputHowGoodWasYourProposal({
  numberInRightPlace,
  numberInWrongPlace,
}) {

  const colorInRightPlace = numberInRightPlace === 1 ? "Farbe" : "Farben";
  const colorInWrongPlace = numberInWrongPlace === 1 ? "Farbe" : "Farben";
  const verbInRightPlace = numberInRightPlace === 1 ? "ist" : "sind";
  const verbInWrongPlace = numberInWrongPlace === 1 ? "ist" : "sind";

  return (
    <div>
      <p>
        <b>{numberInRightPlace}</b> {colorInRightPlace} {verbInRightPlace}{" "}
        <b>richtig</b> platziert und
        <br />
        <b>{numberInWrongPlace}</b> {colorInWrongPlace} {verbInWrongPlace} an
        der <b>falschen</b> Stelle
      </p>
    </div>
  );
}

export default OutputHowGoodWasYourProposal;
