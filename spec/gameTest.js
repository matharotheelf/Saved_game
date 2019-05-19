describe('Game', function(){
  var game;

  it('Game starts off incomplete', function() {
    game = new Game();
    expect(game.is_complete).toBe(false);
  });

  it('Can complete game', function() {
    game = new Game();
    game.complete();
    expect(game.is_complete).toBe(true);
  });
});
