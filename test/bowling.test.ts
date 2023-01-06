/* eslint-disable */
import { BowlingKata } from "../src";

let bowlingGame: BowlingKata = new BowlingKata();

beforeEach(() => {
  bowlingGame = new BowlingKata();
});

const bowlMany = (iteration: number, pins: number): void => {
  for (let i = 0; i < iteration; i++) {
    bowlingGame.roll(pins);
  }
};

describe("Bowling scenarios", () => {
  it("should create a new instance", () => {
    const instance = new BowlingKata();
  });

  it("should score 0 for all bowls resulting in the gutter", () => {
    bowlMany(20, 0);
    expect(bowlingGame.score()).toBe(0);
  });

  it("should score 20 when bowling all ones", () => {
    bowlMany(20, 1);
    expect(bowlingGame.score()).toBe(20);
  });
});
