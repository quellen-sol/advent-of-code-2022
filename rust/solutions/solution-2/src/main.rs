use core::panic;
use std::ops::Index;

mod input;

#[derive(Eq, PartialEq)]
struct GameChoice<'a> {
  pub names: [&'a str; 2],
}

enum GameResult {
  Win = 6,
  Draw = 3,
  Loss = 0,
}

fn main() {
  let INPUT = input::INPUT.split("\n");
  let rock = GameChoice { names: ["A", "X"] };
  let paper = GameChoice { names: ["B", "Y"] };
  let scissors = GameChoice { names: ["C", "Z"] };
  let LL = [&rock, &paper, &scissors];
  let mut score = 0;
  for game in INPUT {
    let inner_game = game.split(" ").collect::<Vec<&str>>();
    let opp = find_choice_from_code(LL, inner_game[0]).unwrap();
    let player = find_choice_from_code(LL, inner_game[1]).unwrap();
    score += get_round_score(LL, player, opp);
  }
  println!("Final score: {}", score);
}

fn get_round_score(LL: [&GameChoice; 3], player_choice: &GameChoice, opp_choice: &GameChoice) -> u32 {
  let inx_of_pc = get_inx_of_choice(LL, player_choice).unwrap();
  let inx_of_oc = get_inx_of_choice(LL, opp_choice).unwrap();
  let mut score = inx_of_pc + 1;
  if inx_of_oc == (inx_of_pc + 1) % 3 {
    // Win
    score += GameResult::Win as u32;
  } else if inx_of_oc == inx_of_pc {
    // Draw
    score += GameResult::Draw as u32;
  } else {
    // Loss
    score += GameResult::Loss as u32;
  }

  return score;
}

fn find_choice_from_code<'a>(list: [&'a GameChoice<'a>; 3], code: &'a str) -> Option<&'a GameChoice<'a>> {
  for choice in list {
    if choice.names.contains(&code) {
      return Some(choice)
    }
  }
  None
}

fn get_inx_of_choice(list: [&GameChoice; 3], item: &GameChoice) -> Option<u32> {
  for i in 0..3 {
    if list[i] == item {
      return Some(i as u32)
    }
  }
  None
}
