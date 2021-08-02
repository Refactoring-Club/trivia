# Session notes

Pick any of the listed problems

- [x] A Game could have less than two players - make sure it always has at least two.
  - Use a compiled language or a static type checker like flowtype
- A Game could have 7 players, make it have at most 6.
  - or slightly easier allow for 7 players or more
- A player that get’s into prison always stays there
  - Other than just fixing the bug, try to understand what’s wrong with the design and fix the root cause
- The deck could run out of questions
  - Make sure that can’t happen (a deck with 1 billion questions is cheating :)
- Introducing new categories of questions seems like tricky business.
  - Could you make sure all places have the “right” question and that the distribution is always correct?
- Similarly changing the board size greatly affects the questions distribution

## To do

- [ ] Clarify our constraints – e.g., the code at the bottom of game.js is our public API, and we're stuck with that.
- [ ] Add some test(s) that give us some idea of whether we're breaking things.
- [ ] Modernize the JS?
- [x] Replace Jasmine with Jest?
- [ ] CLI for the game!

## Retro

### 2021-07-14

#### Stuff we liked about this kata

- this kata comes with a to-do list

#### Stuff we didn't like

- No idea how this game is supposed to be played
