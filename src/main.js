var G = {
	gamestate : 0,
	score: 0,
	bombs: 0,
	nextBomb: 0,
	level: 0,
	cursorPos : [3,4],
	cursorIsActive : true,
	board: [],
	currentPiece: [4,4],
	nextPiece: [1,1],
	nextShift: 0,
	shiftDelay: 0,
	colors : [
		makecol(80,80,80,255),
		makecol(240,0,0,255),
		makecol(0,240,0,255),
		makecol(0,0,240,255),
		makecol(240,0,240,255)
	],
	ghostColors : [
		makecol(80,80,80,75),
		makecol(240,0,0,75),
		makecol(0,240,0,75),
		makecol(0,0,240,75),
		makecol(240,0,240,75)
	],
	antiMisclick: true,
};

function main() {
	enable_debug('debug');
	allegro_init_all("canvas", 640, 480);
	//asset loading
	orbitron = create_font("Orbitron");

	ready(function(){
		loop(function(){
			//game loop
			clear_to_color(canvas,makecol(0,0,0));

			switch (G.gamestate) {
				case 0:
					updateMenu();
					redrawMenu();
					break;
				case 1:
					updateGame();
					redrawGame();
					break;
				default:
					G.gamestate = 0;

			}
		},BPS_TO_TIMER(60));
	});
}
END_OF_MAIN();
