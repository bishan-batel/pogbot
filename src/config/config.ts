const config = {
	eightBall: {
		trigger: [
			"Hey Mekala, pog?",
			"Hey Conar, pog?",
			"conar, pog?",
			"mekala, pog?",
		].reduce((prev, curr) => prev + "|" + curr, "poggers?"),
		responses: [
			"hmm very poggers",
			"that was so poggers",
			"ngl kinda weirdchamp. . .",
			"poggie woggie",
			"poggers.",
			"not pogchamp",
			"pepehands.",
			"I am not laughing and I am NOT pogging.",
			"funny pog.",
			"sadchamp",
			"nochamp",
			"pogchamp",
		],
	},
};

export default config;
