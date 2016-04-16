function updateGame() {
	//cursor
	if (!G.antiMisclick) {
		var posX = Math.floor((mouse_x-60)/50);
		var posY = Math.floor((mouse_y-40)/50);
		if (posX >= 0 && posX <= 6 && posY >= 0 && posY <= 7) {
			G.cursorPos = [posX,posY];
			G.cursorIsActive = true;
		} else {
			G.cursorIsActive = false;
		}

		if (key[KEY_SPACE]) {
			var temp = G.currentPiece[0];
			G.currentPiece[0] = G.currentPiece[1];
			G.currentPiece[1] = temp;
			key[KEY_SPACE] = false;
		}
		if (key[KEY_LSHIFT]) {
			if (G.bombs > 0) {
				G.bombs--;
				for (var i = 0; i < G.board.length; i++) {
					G.board[i][G.cursorPos[1]] = 0;
				}
			}
			key[KEY_LSHIFT] = false;
		}

		if (mouse_pressed && G.cursorIsActive) {
			if (G.board[G.cursorPos[0]][G.cursorPos[1]] === 0 && G.board[G.cursorPos[0]+1][G.cursorPos[1]] === 0) {
				G.board[G.cursorPos[0]][G.cursorPos[1]] = G.currentPiece[0];
				G.board[G.cursorPos[0]+1][G.cursorPos[1]] = G.currentPiece[1];
				G.level++;
				clearCheck();
				lifeCheck();
				newPiece();
			}
		}
	} else {
		G.antiMisclick = false;
	}
}

function newPiece() {
	G.currentPiece = G.nextPiece.slice();
	G.nextPiece[0] = Math.floor(Math.random()*4+1);
	G.nextPiece[1] = Math.floor(Math.random()*4+1);
}

function clearCheck() {
	var markedForClear = [
		[false,false,false,false,false,false,false,false],
		[false,false,false,false,false,false,false,false],
		[false,false,false,false,false,false,false,false],
		[false,false,false,false,false,false,false,false],
		[false,false,false,false,false,false,false,false],
		[false,false,false,false,false,false,false,false],
		[false,false,false,false,false,false,false,false],
		[false,false,false,false,false,false,false,false],
	];
	var clearLevel = 0;
	(function() {
		//vertical check
		var lineLength;
		for (var x = 0; x < G.board.length; x++) {
			lineLength = 1;
			for (var y = 1; y < G.board[x].length; y++) {
				if (G.board[x][y] !== 0 && G.board[x][y] === G.board[x][y-1]) {
					lineLength++;
					if (lineLength >= 4) {
						for (var i = 0; i < lineLength; i++) {
							markedForClear[x][y-i] = true;
						}
						clearLevel++;
					}
				} else {
					lineLength = 1;
				}
			}
		}
	}());
	(function() {
		//horizontal check
		var lineLength;
		for (var y = 0; y < G.board.length; y++) {
			lineLength = 1;
			for (var x = 1; x < G.board[y].length; x++) {
				if (G.board[x][y] !== 0 && G.board[x][y] === G.board[x-1][y]) {
					lineLength++;
					if (lineLength >= 4) {
						for (var i = 0; i < lineLength; i++) {
							markedForClear[x-i][y] = true;
						}
						clearLevel++;
					}
				} else {
					lineLength = 1;
				}
			}
		}
	}());
	(function() {
		//clear marked pieces
		for (var x = 0; x < markedForClear.length; x++) {
			for (var y = 0; y < markedForClear[x].length; y++) {
				if (markedForClear[x][y]) {
					G.board[x][y] = 0;
					G.score += Math.floor((100+(clearLevel+25))*(1+G.level/250));
				}
			}
		}
	}());
	G.level += clearLevel*2;
	if (G.score >= G.nextBomb) {
		G.bomb++;
		G.nextBomb *= 2;
	}
}

function lifeCheck() {
	if (G.bombs > 0) {
		return;
	}
	for (var y = 0; y < G.board.length; y++) {
		for (var x = 0; x < G.board[x].length-1; x++) {
			if (G.board[x][y] === 0 && G.board[x+1][y] === 0) {
				return;
			}
		}
	}
	G.gamestate = 2;
}
