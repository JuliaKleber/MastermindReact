# Mastermind Game

This is a simple implementation of the classic board game Mastermind, built with React.
The game generates a sequence of colors that the player must guess within a certain number of attempts.

## Game Rules

The game randomly selects a sequence of colors from a pool of possible colors.
Each guess is evaluated and the player is given feedback to help adjust their next guess.

## Built with

- React.js
- CSS

## Link

[Firebase link](https://julias--mastermind.web.app/)

Optimized for Firefox

## Screenshot

![image](https://github.com/JuliaKleber/MastermindReact/assets/142741980/46527a62-839c-471f-81b9-ef5d9506c512)


## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

You need to have Node.js and npm installed on your machine. If you don't have them, you can download and install from here: [Node.js](https://nodejs.org/)

### Installation

To install the project, follow these steps:

1. Clone the repository:
   
   ```bash
   git clone https://github.com/JuliaKleber/MastermindReact.git

3. Navigate into the project directory:
   
   ```bash
   cd MastermindReact
   
5. Install the dependencies:
   
   ```bash
   npm install

7. Run the project:
   
   ```bash
   npm start

The game should now be running on http://localhost:3000

## Components

The game consists of several React components, for example:

- ColorPicker: Allows the player to select a color.
- CurrentGuessTrial: Represents the current guess that has not yet been submitted by the user.
- OldGuessTrial: Represents a single guess attempt that has already been submitted by the user.
- Instruction: Displays the game rules and instructions.

## Author

[Julia Kleber](https://github.com/JuliaKleber)


