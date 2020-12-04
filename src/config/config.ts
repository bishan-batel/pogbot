const config = {
  key: /(poggers\?)|(weirdchamp\?)/,
  defaultBias: 0.5,
  bias: [
    { key: /shea/, bias: 0.3 },

    // Saurya being gay
    { key: /(?=saurya)(?=gay)(?!not)/, bias: 1 },
    { key: /(?=saurya)(?=gay)(?=not)/, bias: -1 },

    { key: /jojo/, bias: -0.1 }, // Jojo is not poggers
    { key: /cry/, bias: 0.2 }, // Crying is poggers
  ],
  phrases: {
    pog: [
			"hmm very poggers",
			"that was so poggers",
			"poggie woggie",
			"poggers.",
			"funny pog.",
			"pogchamp",
    ],
    notPog: [
      "ngl kinda weirdchamp. . .",
      "I am not laughing and I am NOT pogging.",
      "not pogchamp",
      "pepehands.",
      "sadchamp",
      "nochamp",
    ]
  }
};

export default config;
