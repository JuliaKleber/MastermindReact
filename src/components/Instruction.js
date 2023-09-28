// Eine Anleitung zum Spiel wird angezeigt.

import React from "react";

function Instruction(props) {
  return (
    <div id="instruction">
      <h3>Spielanleitung für Mastermind</h3>
      <p>
        Der Computer wählt zufällig vier Farben aus. Ziel ist es diese vier
        Farben zu erraten. Farben können mehrfach in der Lösung vorkommen.
      </p>
      <p>
        Zum Setzen der Farben wähle eines der Farbfelder oben an. Dann können
        die Farben unten bei den Versuchen gesetzt werden indem die weißen
        Felder ausgewählt werden.
      </p>
      <p>Du hast {props.numberTrials} Versuche um die Lösung zu finden.</p>
    </div>
  );
}

export default Instruction;
