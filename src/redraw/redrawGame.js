var Anim = {
	clearMask: [
		[0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0],
	]
};

function redrawGame() {
	(function() {
		// game board
		for (var x = 0; x < G.board.length; x++) {
			for (var y = 0; y < G.board[x].length; y++) {
				rectfill(canvas, 40+50*x, 40+50*y, 48, 48, G.colors[G.board[x][y]]);
			}
		}
	}());

	(function() {
		// cursor
		if (cursorIsActive) {
			if (G.board[G.cursorPos[0]][G.cursorPos[1]] === 0 && G.board[G.cursorPos[0]+1][G.cursorPos[1]] === 0) {
				rectfill(canvas, 40+50*G.cursorPos[0], 40+50*G.cursorPos[1], 48, 48, G.ghostColors[G.currentPiece[0]]);
				rectfill(canvas, 90+50*G.cursorPos[0], 40+50*G.cursorPos[1], 48, 48, G.ghostColors[G.currentPiece[1]]);
				rect(canvas, 40+50*G.cursorPos[0], 40+50*G.cursorPos[1], 100, 50, makecol(240,240,240), 4);
			} else {
				rect(canvas, 40+50*G.cursorPos[0], 40+50*G.cursorPos[1], 100, 50, makecol(160,160,160), 4);
			}
		}
	}());

	(function() {
		// current piece
		rectfill(canvas, 460, 50, 48, 48, G.colors[G.currentPiece[0]]);
		rectfill(canvas, 510, 50, 48, 48, G.colors[G.currentPiece[1]]);
		// next piece
		rectfill(canvas, 485, 110, 24, 24, G.colors[G.nextPiece[0]]);
		rectfill(canvas, 510, 110, 24, 24, G.colors[G.nextPiece[1]]);
	}());
}
