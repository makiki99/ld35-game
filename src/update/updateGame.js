function updateGame() {
	//cursor
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
			G.progress ++;
			clearCheck();
			lifeCheck();
			newPiece();
		}
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
	(function() {
		//vertical check
		var lineLength = 1;
		for (var x = 0; x < G.board.length; x++) {
			for (var y = 1; y < G.board[x].length; y++) {
				if (G.board[x][y] !== 0 && G.board[x][y] === G.board[x][y-1]) {
					lineLength++;
					if (lineLength >= 4) {
						for (var i = 0; i < lineLength; i++) {
							markedForClear[x][y-i] = true;
						}
					}
				} else {
					lineLength = 1;
				}
			}
		}
	}());
	(function() {
		//horizontal check
		var lineLength = 1;
		for (var y = 0; y < G.board.length; y++) {
			for (var x = 1; x < G.board[y].length; x++) {
				if (G.board[x][y] !== 0 && G.board[x][y] === G.board[x-1][y]) {
					lineLength++;
					if (lineLength >= 4) {
						for (var i = 0; i < lineLength; i++) {
							markedForClear[x-i][y] = true;
						}
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
				}
			}
		}
	}());
}

function lifeCheck() {
	for (var y = 0; y < G.board.length; y++) {
		for (var x = 0; x < G.board[x].length-1; x++) {
			if (G.board[x][y] === 0 && G.board[x+1][y] === 0) {
				return;
			}
		}
	}
	G.gamestate = 2;
}
