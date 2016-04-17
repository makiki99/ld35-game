function redrawMenu() {
	textout_centre(canvas, orbitron, "Click on the board to place piece.", 320, 60, 24, makecol(255,255,255));
	textout_centre(canvas, orbitron, "Press space to flip your current piece.", 320, 100, 24, makecol(255,255,255));
	textout_centre(canvas, orbitron, "Group colors in rows and columns", 320, 140, 24, makecol(255,255,255));
	textout_centre(canvas, orbitron, "of 4 to clear them and gain score.", 320, 180, 24, makecol(255,255,255));
	textout_centre(canvas, orbitron, "Press shift to use bomb.", 320, 220, 24, makecol(255,255,255));
	textout_centre(canvas, orbitron, "Bomb clears the whole row when used.", 320, 260, 24, makecol(255,255,255));
	textout_centre(canvas, orbitron, "You can get more bombs by getting high score.", 320, 300, 24, makecol(255,255,255));
	textout_centre(canvas, orbitron, "Click on the screen to start!", 320, 450, 24, makecol(255,255,255));
}
