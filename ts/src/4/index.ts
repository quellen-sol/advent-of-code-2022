import fs from "fs";

const input = fs.readFileSync("./src/4/input.txt").toString().split("\n");

const onePairContainsAnother = (pair: string[]) => {
  const range1 = pair[0].split("-").map((x) => parseInt(x));
  const range2 = pair[1].split("-").map((x) => parseInt(x));
  return (range1[0] <= range2[0] && range1[1] >= range2[1]) || (range2[0] <= range1[0] && range2[1] >= range1[1]);
};

const onePairOverlapsAnother = (pair: string[]) => {
  const range1 = pair[0].split("-").map((x) => parseInt(x));
  const range2 = pair[1].split("-").map((x) => parseInt(x));
  return range1[0] <= range2[1] && range1[1] >= range2[0];
};

const part1 = () => {
  const pairs = input.map((p) => p.split(","));
  let count = 0;
  for (const pair of pairs) {
    if (onePairContainsAnother(pair)) {
      count++;
    }
  }
  return count;
};

const part2 = () => {
  const pairs = input.map((p) => p.split(","));
  let count = 0;
  for (const pair of pairs) {
    if (onePairOverlapsAnother(pair)) {
      count++;
    }
  }
  return count;
};

console.log(part1());
console.log(part2());
