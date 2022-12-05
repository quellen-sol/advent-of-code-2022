mod input;

fn main() {
  let elves = input::INPUT.split("\n\n");

  let elves_by_calories = &mut elves
    .map(|elf| {
      elf
        .split("\n")
        .map(|value| value.parse::<u32>().unwrap())
        .sum()
    })
    .collect::<Vec<u32>>();
  elves_by_calories.sort_by(|a, b| b.cmp(a));

  let max = elves_by_calories[0];
  let top_three_sum: u32 = elves_by_calories.iter().take(3).sum();

  println!("Highest Calorie Value: {}", max);
  println!("Top Three Sum: {}", top_three_sum);
}
