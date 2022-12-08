import fs from "fs";

const input = fs.readFileSync("./src/3/input.txt").toString().split("\n");

const abcMap = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

const getPriority = (char: string) => {
  return abcMap.indexOf(char) + 1;
};

const getMatchingCharsPart1 = (stringHalves: [string, string]) => {
  const contains: string[] = [];
  for (const char of stringHalves[0]) {
    if (stringHalves[1].includes(char) && !contains.includes(char)) {
      contains.push(char);
    }
  }
  return contains;
};

const getMatchingCharsPart2 = (stringPieces: [string, string, string]) => {
  const contains = new Set<string>();
  for (const piece of stringPieces) {
    for (const char of piece) {
      if (!contains.has(char) && stringPieces.every((p) => p.includes(char))) {
        contains.add(char);
      }
    }
  }
  return Array.from(contains.values());
};

const part1 = () => {
  let totalPriority = 0;
  for (const line of input) {
    const firstHalf = line.slice(0, line.length / 2);
    const secondHalf = line.slice(Math.floor(line.length / 2), line.length);
    totalPriority += getMatchingCharsPart1([firstHalf, secondHalf]).reduce((acc, curr) => acc + getPriority(curr), 0);
  }
  return totalPriority;
};

const part2 = () => {
  let totalPriority = 0;
  for (let i = 0; i < input.length; i += 3) {
    const firstSack = input[i];
    const secondSack = input[i + 1];
    const thirdSack = input[i + 2];
    totalPriority += getMatchingCharsPart2([firstSack, secondSack, thirdSack]).reduce(
      (acc, curr) => acc + getPriority(curr),
      0,
    );
  }
  return totalPriority;
};

console.log(part1());
console.log(part2());
