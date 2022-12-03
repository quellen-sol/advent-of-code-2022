import fs from "fs";

const input = fs.readFileSync("./src/2/input.txt").toString().split("\n");

type Choice = "Rock" | "Paper" | "Scissors";

type GameMap = {
  [choice in Choice]: [string, string];
};

const gameMap: GameMap = {
  Rock: ["A", "X"],
  Paper: ["B", "Y"],
  Scissors: ["C", "Z"],
};

const mapKeys = Object.keys(gameMap);

const getNameFromCode = (code: string) => {
  for (const [choice, codes] of Object.entries(gameMap) as [
    Choice,
    [string, string]
  ][]) {
    if (codes.includes(code)) {
      return choice;
    }
  }
};

const getWinningChoice = (choice: Choice) => {
  return mapKeys[(mapKeys.indexOf(choice) + 1) % 3];
};

const getLosingChoice = (choice: Choice) => {
  return mapKeys[(mapKeys.indexOf(choice) + 2) % 3];
};

const getResult = (gameString: string) => {
  const [opp, player] = gameString.split(" ");
  const oppChoice = getNameFromCode(opp);
  const playerChoice = getNameFromCode(player);
  if (!oppChoice || !playerChoice) {
    throw new Error("Invalid game string");
  }
  const oppIndex = mapKeys.indexOf(oppChoice);
  const playerIndex = mapKeys.indexOf(playerChoice);
  let score = playerIndex + 1;
  if (oppIndex === playerIndex) {
    // Draw
    score += 3;
  } else if ((oppIndex + 1) % 3 === playerIndex) {
    // Win
    score += 6;
  }
  return score;
};

const playOutGames = () => {
  let totalScore = 0;
  for (const game of input) {
    totalScore += getResult(game);
  }
  return totalScore;
};

const playOutGamesPart2 = () => {
  let score = 0;
  for (const game of input) {
    const [opp, neededCase] = game.split(" ");
    let choice = "";
    const oppChoice = getNameFromCode(opp)!;
    switch (neededCase) {
      case "X":
        // Lose
        choice = getLosingChoice(oppChoice);
        break;
      case "Y":
        // Draw
        choice = oppChoice;
        score += 3;
        break;
      case "Z":
        // Win
        choice = getWinningChoice(oppChoice);
        score += 6;
        break;
    }
    score += mapKeys.indexOf(choice) + 1;
  }
  return score;
};

console.log(playOutGames());
console.log(playOutGamesPart2());
