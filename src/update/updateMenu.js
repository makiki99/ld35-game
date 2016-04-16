function updateMenu() {
	if (mouse_pressed) {
		// init game
		G.gamestate = 1;
		G.progress = 0;
		G.score = 0;
		G.bombs = 3;
		G.nextBomb = 1000000;
		level = 0;
		G.board = [
			[0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0],
			[0,0,0,0,0,0,0,0],
		];
		shapeshift(0);
		newPiece();
		newPiece();
		G.antiMisclick = true;
	}
}
