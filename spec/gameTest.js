describe('Game', function(){
  var game;

  it('Game starts off incomplete', function() {
    game = new Game();
    expect(game.is_complete).toBe(false);
  });
});
