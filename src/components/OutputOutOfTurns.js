import React from "react";

function OutputOutOfTurns({ colorsSolution }) {
  return (
    <div>
      <p>
        Die richtige Lösung ist
        <br />
        <b>{colorsSolution}</b>
      </p>
    </div>
  );
}

export default OutputOutOfTurns;
