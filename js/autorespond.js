//remove all punctuation,make input lowercase.
// see if any of the words match --> pick the one with the highest match
// if no words match then revert to default
// if the response has a third value it triggers an event.
var responses = [
  ["hello", "Hi there intruder."],
  ["hi", "Hi there intruder."],
  ["yo", "Hi there intruder."],
  ["whats up", "Hi there intruder."],
  ["hey", "Hi there intruder."],
  ["hi", "Hi there intruder."],
  ["tell me", ""],
  ["game", "Do you want to play a game? I love games!", 0]
]
