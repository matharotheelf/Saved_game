describe('Game', function(){
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it('Game starts off incomplete', function() {
    expect(game.is_complete).toBe(false);
  });

  it('Can complete game', function() {
    game.complete();
    expect(game.is_complete).toBe(true);
  });

  it('Can restart game', function() {
    game.complete();
    game.restart();
    expect(game.is_complete).toBe(false);
  });
});
