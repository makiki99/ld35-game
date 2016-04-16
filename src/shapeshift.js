function shapeshift(shiftID) {
	var preshiftBoard = G.board.slice();
	//shapeshift the board
	switch (shiftID) {
		case 0:
			break;
		case 1:
			// mov up
			for (var i = 0; i < G.board.length; i++) {
				G.board[i].push(G.board[i].shift());
			}
			break;
		case 2:
			// mov down
			for (var i = 0; i < G.board.length; i++) {
				G.board[i].unshift(G.board[i].pop());
			}
			break;
		case 3:
			// mov left
			G.board.push(G.board.shift());
			break;
		case 4:
			// mov right
			G.board.unshift(G.board.pop());
			break;
		case 5:
			// rotate left
			break;
		case 6:
			// rotate right
			break;
		case 7:
			// scramble rows
			break;
		default:
	}
	//select next shapeshift
	if (level < 250) {
		G.nextShift = Math.floor(Math.random()*4+1);
	} else if (level < 500) {
		G.nextShift = Math.floor(Math.random()*6+1);
	} else {
		G.nextShift = Math.floor(Math.random()*7+1);
		if (G.nextShift === 7) {
			G.nextShift = Math.floor(Math.random()*7+1);
		}
	}
	G.shiftDelay = Math.floor(Math.random()*3+4);
}
