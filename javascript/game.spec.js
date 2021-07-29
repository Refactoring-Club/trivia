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

describe("when the game has not started", () => {
  it("the 'started' flag is false", () => {
    var game = new Game();

    game.add("Chad");

    expect(game.started).toBe(false);
  });
});

describe("after the first roll", () => {
  it("the 'started' flag is true", () => {
    var game = new Game();

    game.add("Cynthia");
    game.add("Wilbur");

    game.roll(1);

    expect(game.started).toBe(true);
  });

  it("logs the current player's new position", () => {
    jest.spyOn(console, "log");
    var game = new Game();

    game.add("Cynthia");
    game.add("Wilbur");

    game.roll(3);

    expect(console.log).toHaveBeenCalledWith("Cynthia's new location is 3");

    jest.restoreAllMocks();
  });
});
