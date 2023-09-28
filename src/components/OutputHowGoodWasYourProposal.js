import React from "react";

function OutputHowGoodWasYourProposal(props) {
  const inRightPlace = props.inRightPlace;
  const inWrongPlace = props.inWrongPlace;

  return (
    <>
      {parseInt(inRightPlace) !== 1 && parseInt(inWrongPlace) !== 1 && (
        <p>
          <b>{inRightPlace}</b> Farben sind <b>richtig</b> platziert und <br />
          <b>{inWrongPlace}</b> Farben sind an der <b>falschen</b> Stelle
        </p>
      )}

      {parseInt(inRightPlace) !== 1 && parseInt(inWrongPlace) === 1 && (
        <p>
          <b>{inRightPlace}</b> Farben sind <b>richtig</b> platziert und <br />
          <b>{inWrongPlace}</b> Farbe ist an der <b>falschen</b> Stelle
        </p>
      )}

      {parseInt(inRightPlace) === 1 && parseInt(inWrongPlace) !== 1 && (
        <p>
          <b>{inRightPlace}</b> Farbe ist <b>richtig</b> platziert und <br />
          <b>{inWrongPlace}</b> Farben sind an der <b>falschen</b> Stelle
        </p>
      )}

      {parseInt(inRightPlace) === 1 && parseInt(inWrongPlace) === 1 && (
        <p>
          <b>{inRightPlace}</b> Farbe ist <b>richtig</b> platziert und <br />
          <b>{inWrongPlace}</b> Farbe ist an der <b>falschen</b> Stelle
        </p>
      )}
    </>
  );
}

export default OutputHowGoodWasYourProposal;
