if(localStorage.getItem('is_game_complete')) {
  is_game_complete = JSON.parse(localStorage.getItem('is_game_complete'));
}
else {
  is_game_complete = false
}

game = new Game(is_game_complete);

function complete() {
  game.complete()
  document.getElementById("gamenotcomplete").style.display="none";
  document.getElementById("gamecomplete").style.display="unset";
}

function restart() {
  game.restart()
  document.getElementById("gamenotcomplete").style.display="unset";
  document.getElementById("gamecomplete").style.display="none";
}

function save() {
  localStorage.setItem('is_game_complete', JSON.stringify(game.is_complete));
}

if(game.is_complete) {
  document.getElementById("gamenotcomplete").style.display="none";
} else {
  document.getElementById("gamecomplete").style.display="none";
}
