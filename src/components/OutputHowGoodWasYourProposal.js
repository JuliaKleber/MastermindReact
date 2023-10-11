import React from "react";

function OutputHowGoodWasYourProposal({
  numberInRightPlace,
  numberInWrongPlace,
}) {
  const parsedNumberInRightPlace = parseInt(numberInRightPlace);
  const parsedNumberInWrongPlace = parseInt(numberInWrongPlace);

  const numberInRightPlaceText =
    parsedNumberInRightPlace === 1 ? "Farbe" : "Farben";
  const numberInWrongPlaceText =
    parsedNumberInWrongPlace === 1 ? "Farbe" : "Farben";
  const verbInRightPlace = parsedNumberInRightPlace === 1 ? "ist" : "sind";
  const verbInWrongPlace = parsedNumberInWrongPlace === 1 ? "ist" : "sind";

  return (
    <div>
      <p>
        <b>{parsedNumberInRightPlace}</b> {numberInRightPlaceText}{" "}
        {verbInRightPlace} <b>richtig</b> platziert und<br />
        <b>{parsedNumberInWrongPlace}</b> {numberInWrongPlaceText}{" "}
        {verbInWrongPlace} an der <b>falschen</b> Stelle
      </p>
    </div>
  );
}

export default OutputHowGoodWasYourProposal;
