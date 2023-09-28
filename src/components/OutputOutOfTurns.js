import React from "react";

function OutputOutOfTurns(props) {
  const colorsSolution = props.colorsSolution;
  return (
    <>
      <p>
        Die richtige Lösung ist
        <br />
        <b>{colorsSolution}</b>
      </p>
    </>
  );
}

export default OutputOutOfTurns;
