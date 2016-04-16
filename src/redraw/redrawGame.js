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
		if (G.cursorIsActive) {
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
		// score
		textout(canvas, orbitron, "Score", 450, 70, 16, makecol(255,255,255));
		textout_right(canvas, orbitron, G.score, 630, 70, 16, makecol(255,255,255));
		// level
		textout(canvas, orbitron, "Level", 450, 90, 16, makecol(255,255,255));
		textout_right(canvas, orbitron, G.level, 630, 90, 16, makecol(255,255,255));
		// bombs
		textout(canvas, orbitron, "Bombs", 450, 110, 16, makecol(255,255,255));
		textout_right(canvas, orbitron, G.bombs, 630, 110, 16, makecol(255,255,255));
	}());

	(function() {
		// next piece
		textout_centre(canvas, orbitron, "Next Piece", 540, 150, 16, makecol(255,255,255));
		rectfill(canvas, 490, 160, 48, 48, G.colors[G.nextPiece[0]]);
		rectfill(canvas, 540, 160, 48, 48, G.colors[G.nextPiece[1]]);
	}());
	(function() {
		// next shift
		textout_centre(canvas, orbitron, "Next Shift", 540, 235, 16, makecol(255,255,255));
		textout_centre(canvas, orbitron, G.shiftNames[G.nextShift], 540, 255, 16, makecol(255,255,255));
		textout_centre(canvas, orbitron, G.shiftDelay + " turns left", 540, 275, 16, makecol(255,255,255));
	}());
}
