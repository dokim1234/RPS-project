//Chooses rock paper or scisssors at random for computer
function computerPlay() {
  var computerOptions = ['rock','paper','scissors'];
  return computerOptions[Math.floor(Math.random()*computerOptions.length)];
}
