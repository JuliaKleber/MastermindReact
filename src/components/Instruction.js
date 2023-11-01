// Eine Anleitung zum Spiel wird angezeigt.

import React from "react";

const Instruction = (props) => {
  return (
    <div className="box" id="instruction">
      <h3>Spielanleitung für Mastermind</h3>
      <p>
        Der Computer wählt zufällig {props.numberInputFields} Farben aus. Ziel
        ist es, diese Farben zu erraten. Farben können mehrfach in der Lösung
        vorkommen.
      </p>
      <p>
        Zum Setzen der Farben wähle eines der {props.numberColors} Farbfelder
        an. Dann kannst du die weißen Quadrate der Versuche einfärben, indem du
        sie auswählst.
      </p>
      <p>
        Du hast insgesamt {props.numberTrials} Versuche um die Lösung zu finden.
      </p>
    </div>
  );
}

export default Instruction;
