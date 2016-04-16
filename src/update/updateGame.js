function updateGame() {
	//cursor
	var posX = Math.floor((mouse_x-60)/50);
	var posY = Math.floor((mouse_y-40)/50);
	if (posX >= 0 && posX <= 6 && posY >= 0 && posY <= 7) {
		G.cursorPos = [posX,posY];
		cursorIsActive = true;
	} else {
		cursorIsActive = false;
	}

	if (mouse_pressed) {
		if (G.board[G.cursorPos[0]][G.cursorPos[1]] === 0 && G.board[G.cursorPos[0]+1][G.cursorPos[1]] === 0) {
			G.board[G.cursorPos[0]][G.cursorPos[1]] = G.currentPiece[0];
			G.board[G.cursorPos[0]+1][G.cursorPos[1]] = G.currentPiece[1];
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

}

function lifeCheck() {
	
}
