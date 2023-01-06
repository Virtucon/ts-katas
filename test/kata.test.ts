import { BowlingKata, Kata } from "../src";

describe("Kata scenarios", () => {
  it("should create instance", () => {
    const sut = new Kata();
  });

  it("should execute", () => {
    const sut = new Kata();

    const actual = sut.execute("something", 2);
  });

  it("should not return null", () => {
    const sut = new Kata();

    const actual = sut.execute("something", 2);

    expect(actual).not.toBeNull();
  });

  it("should return expected result", () => {
    const sut = new Kata();

    const actual = sut.execute("something", 2);

    expect(actual).toBe("something2");
  });
});

describe("Bowling scenarios", () => {
  it("should create a new instance", () => {
    const instance = new BowlingKata();
  });

  it("should score 0 for all bowls resulting in the gutter", () => {
    const game: BowlingKata = new BowlingKata();
    for (let i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.score()).toBe(0);
  });
});
