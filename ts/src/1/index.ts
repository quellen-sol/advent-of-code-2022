import fs from "fs";

const input = fs.readFileSync("./src/1/input.txt").toString();

const elves = input.split("\n\n");

const caloriesByElf = elves.map((elf) =>
  elf.split("\n").reduce((acc, cur) => {
    const value = parseInt(cur);
    if (!isNaN(value)) {
      return acc + value;
    }
    return acc;
  }, 0)
);

const highestCalories = Math.max(...caloriesByElf);

const top3Total = caloriesByElf
  .sort((a, b) => b - a)
  .slice(0, 3)
  .reduce((acc, cur) => acc + cur);

console.log(highestCalories);
console.log(top3Total);
