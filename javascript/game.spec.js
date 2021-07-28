require("./game.js");

describe("When there are no players", function () {
  it("tells you that you did a bad", () => {
    var game = new Game();

    const rollTheDie = () => game.roll(Math.floor(Math.random() * 6) + 1);

    expect(rollTheDie).toThrow("You did a bad.");
  });
});

describe("When there is only one player", function () {
  it("tells you that you did a bad", () => {
    var game = new Game();

    game.add("Chet");
    const rollTheDie = () => game.roll(Math.floor(Math.random() * 6) + 1);

    expect(rollTheDie).toThrow("You did a bad.");
  });
});

describe("When there enough players", function () {
  it("doesn't throw a bad error", () => {
    var game = new Game();

    game.add("Chet");
    game.add("Marla");
    const rollTheDie = () => game.roll(Math.floor(Math.random() * 6) + 1);

    expect(rollTheDie).not.toThrow();
  });
});
