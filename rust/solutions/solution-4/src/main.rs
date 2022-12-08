mod input;

fn main() {
  let parsed_input = input::INPUT
    .lines()
    .map(|p| {
      p.split(",")
        .map(|pair| {
          pair
            .split("-")
            .map(|rn| rn.parse::<u32>().unwrap())
            .collect::<Vec<u32>>()
        })
        .collect::<Vec<_>>()
    })
    .collect::<Vec<_>>();

    let mut complete_covers = 0;
    let mut overlaps = 0;
    for pair in parsed_input {
      let range1 = pair.clone()[0].clone();
      let range2 = pair.clone()[1].clone();
      if does_completely_cover(&range1, &range2) {
        complete_covers += 1;
      }
      if does_overlap(&range1, &range2) {
        overlaps += 1;
      }
    }

    println!("Covers: {}\nComplete Overlaps: {}", complete_covers, overlaps);
}

fn does_completely_cover(range1: &Vec<u32>, range2: &Vec<u32>) -> bool {
  (range1[0] <= range2[0] && range1[1] >= range2[1]) || (range2[0] <= range1[0] && range2[1] >= range1[1])
}

fn does_overlap(range1: &Vec<u32>, range2: &Vec<u32>) -> bool {
  range1[0] <= range2[1] && range1[1] >= range2[0]
}
