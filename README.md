# Mastermind Game

This is a simple implementation of the classic board game Mastermind, built with React. The game generates a sequence of colors that the player must guess within a certain number of attempts.

## Game Rules

The game randomly selects a sequence of 4 colors from a pool of 6 possible colors: yellow, orange, red, mediumorchid, royalblue, and limegreen. The player has 8 attempts to guess the sequence. Each guess is evaluated and the player is given feedback to help adjust their next guess.

## Built with

- React.js
- scss
  
## Getting Started

To get a local copy up and running, follow these steps:

### Prerequisites

You need to have Node.js and npm installed on your machine. If you don't have them, you can download and install from here: [Node.js](https://nodejs.org/)

### Installation

To install the project, follow these steps:

1. Clone the repository:
``bash
git clone https://github.com/GoldieCrystal/mastermind.git

2. Navigate into the project directory:
   ``bash
   cd mastermind
   
3. Install the dependencies:
   ``bash
   npm install

5. Run the project:
   ``bash
   npm start

The game should now be running on http://localhost:3000

## Components

The game consists of several React components, for example:

ColorPicker: Allows the player to select a color.
GuessTrial: Represents a single guess attempt.
Instruction: Displays the game rules and instructions.

## Screenshot

## Author

Julia Kleber (github.com/GoldieCrystal)

