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
			(function() {
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
				for (var x = 0; x < preshiftBoard.length; x++) {
					for (var y = 0; y < preshiftBoard[x].length; y++) {
						G.board[x][y] = preshiftBoard[7-y][x];
					}
				}
			}());
			break;
		case 6:
			// rotate right
			(function() {
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
				for (var x = 0; x < preshiftBoard.length; x++) {
					for (var y = 0; y < preshiftBoard[x].length; y++) {
						G.board[x][y] = preshiftBoard[y][7-x];
					}
				}
			}());
			break;
		case 7:
			// shift colors
			(function() {
				for (var x = 0; x < preshiftBoard.length; x++) {
					for (var y = 0; y < preshiftBoard[x].length; y++) {
						if (G.board[x][y] !== 0) {
							G.board[x][y]++;
							if (G.board[x][y] > 4) {
								G.board[x][y] = 1;
							}
						}
					}
				}
			}());
			break;
		case 8:
		 // diagional jump
		 // don't kill me for this example of ugly code
		 G.board.push(G.board.shift());
		 G.board.push(G.board.shift());
		 G.board.push(G.board.shift());
		 G.board.push(G.board.shift());
		 for (i = 0; i < G.board.length; i++) {
			 G.board[i].unshift(G.board[i].pop());
		 }
		 for (i = 0; i < G.board.length; i++) {
			 G.board[i].unshift(G.board[i].pop());
		 }
		 for (i = 0; i < G.board.length; i++) {
			 G.board[i].unshift(G.board[i].pop());
		 }
		 for (i = 0; i < G.board.length; i++) {
			 G.board[i].unshift(G.board[i].pop());
		 }
	}

	clearCheck();
	lifeCheck();
	
	//select next shapeshift
	while (G.nextShift === shiftID) {
		if (level < 100) {
			G.nextShift = Math.floor(Math.random()*4+1);
		} else if (level < 300) {
			G.nextShift = Math.floor(Math.random()*6+1);
		} else if (level < 500) {
			G.nextShift = Math.floor(Math.random()*7+1);
		} else {
			G.nextShift = Math.floor(Math.random()*87+1);
		}
		G.shiftDelay = 5;
	}
}
