$(document).ready(function() {
    var gameType = 'bowling'; // TODO: several game types
    var gameModel = new GameModel();
    var game = new Game(gameModel);
	var renderer = new Renderer();

    renderer.setOnclickEvent(game.insertStroke);

});
