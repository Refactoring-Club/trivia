require("./game.js");

describe("The test environment", function () {
  it("should pass", function () {
    expect(true).toBe(true);
  });

  it("should access game", function () {
    expect(Game).toBeDefined();
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
