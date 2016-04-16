function updateMenu() {
	if (mouse_pressed) {
		// init game
		G.gamestate = 1;
		G.progress = 0;
		G.score = 0;
		G.bombs = 3;
		G.nextBomb = 25000;
		G.nextShift = Math.floor(Math.random()*4+1);
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
		newPiece();
		newPiece();
		G.antiMisclick = true;
	}
}
