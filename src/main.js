function main()
{
	enable_debug('debug');
	allegro_init_all("canvas", 640, 480);
	//asset loading
	orbitron = create_font("Orbitron");

	ready(function(){
		loop(function(){
			//game loop
			clear_to_color(canvas,makecol(255,255,255));
			update();
			redraw();
		},BPS_TO_TIMER(60));
	});
}
END_OF_MAIN();
