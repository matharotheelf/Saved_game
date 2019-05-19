game = new Game(false);

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


if(game.is_complete == false) {
  document.getElementById("gamecomplete").style.display="none";
} else {
  document.getElementById("gamenotcomplete").style.display="none";
}
