const products = [
	{
		id: 0,
		category: "tabacos",
		title: "Blueberry Mint",
		brand: "Zomo",
		price: 450,
		stock: 9,
		picUrl:
			"https://cdn.zomoofficial.com/wp-content/uploads/2020/02/ZOMO_2019_PY_50G_BLUEBERRY_MINT.jpg",
		description:
			"Una combinación que tuvo éxito. Zomo presenta a los amantes de la buena esencia, y que son exigentes tratándose de una mezcla de calidad. Ella trae el sabor exótico de blueberry con la refrescancia de la menta.",
	},
	{
		id: 1,
		category: "tabacos",
		title: "Cola Mint",
		brand: "Zomo",
		price: 450,
		stock: 9,
		picUrl:
			"https://cdn.zomoofficial.com/wp-content/uploads/2020/02/ZOMO_2019_PY_50G_COLA_MINT.jpg",
		description:
			"Zomo ofrece a los narguileros una esencia que combina el sabor y el refresco de la menta con refrescos de cola. Esta esencia llegó a abrir todos los sentidos, su sabor se asemeja a una refrescante cola con el toque de menta para hacerlo aún más llamativo. Ideal para quienes gustan de sabores y aromas dulces y suaves.",
	},
	{
		id: 2,
		category: "tabacos",
		title: "Cool Lemon",
		brand: "Zomo",
		price: 450,
		stock: 9,
		picUrl:
			"https://cdn.zomoofficial.com/wp-content/uploads/2020/02/ZOMO_2019_PY_50G_COOL_LEMON.jpg",
		description:
			"Para aquellos que les gusta el sabor cítrico del limón, les encantará esta sensacional esencia. Este sabor te lleva a la sensación cítrica del limón con una frescura sin igual. Ideal para relajar los pensamientos de quienes gustan de una buena esencia en sus sesiones.",
	},
	{
		id: 3,
		category: "tabacos",
		title: "Framboera",
		brand: "Zomo",
		price: 450,
		stock: 9,
		picUrl:
			"https://cdn.zomoofficial.com/wp-content/uploads/2020/11/ZOMO_2019_PY_50G_FRAMBOERA.png",
		description:
			"Ah, que coctel delicioso. El sabor Framboera es todo lo que esta bien, hicimos un drink especial con frambuesa y pera, el resultado fue increíble. Experimenta ese sabor que llegó con todo en la línea Drinks.",
	},
	{
		id: 4,
		category: "tabacos",
		title: "Tanger",
		brand: "Zomo",
		price: 450,
		stock: 9,
		picUrl:
			"https://cdn.zomoofficial.com/wp-content/uploads/2020/02/ZOMO_2019_PY_50G_SPLASH_TANGER.jpg",
		description:
			"Una esencia que aporta todo el poder de la mandarina. Un sabor con ese toque delicado y cítrico que solo te da la mandarina.",
	},
	{
		id: 5,
		category: "tabacos",
		title: "Dry Zahara",
		brand: "Zomo",
		price: 500,
		stock: 9,
		picUrl:
			"https://cdn.zomoofficial.com/wp-content/uploads/2020/02/ZOMO_2019_PY_50G_DRY_SAHARA.jpg",
		description:
			"Los misterios del desierto en una experiencia increíble, eso es lo que Zomo trae con la esencia Dry Sahara de la línea World Experience, que está siendo un éxito en las tiendas de narguile y en las sesiones del país. Una sensación refrescante a café intenso. Dry Sahara posee un sabor único, el contraste del calor local con un sabor fresco. Un viaje alrededor del mundo por medio de nuestras esencias. Llega la línea World Experience, que une sabores de todo el mundo directamente en tu cazoleta.",
	},
	{
		id: 6,
		category: "narguilas",
		title: "Eco Ezra Matt Rosegold",
		brand: "Kaya Elox",
		price: 16800,
		stock: 11,
		picUrl:
			"https://i.ibb.co/m4PSSXj/cachimba-kaya-elox-eco-ezra-matt-rosegold-550x550h.jpg",
		description:
			"Simple, pero elegante: así es la nueva cachimba Kaya ELOX Eco Ezra - Matt Rosegold. Su montaje es sencillo y rápido gracias al sistema Click, que nos permite conectar el cuerpo con la base con un simple movimiento. Todas las partes metálicas están fabricadas en aluminio.",
	},
	{
		id: 7,
		category: "narguilas",
		title: "Eco Ezra Matt Blue",
		brand: "Kaya Elox",
		price: 16800,
		stock: 18,
		picUrl:
			"https://i.ibb.co/zbKjNZV/cachimba-kaya-elox-eco-ezra-matt-blue-550x550h.jpg",
		description:
			"Simple, pero elegante: así es la nueva cachimba Kaya ELOX Eco Ezra - Matt Blue. Su montaje es sencillo y rápido gracias al sistema Click, que nos permite conectar el cuerpo con la base con un simple movimiento. Todas las partes metálicas están fabricadas en aluminio.",
	},
	{
		id: 8,
		category: "narguilas",
		title: "Eco Slice - Small Rosegold",
		brand: "Kaya Elox",
		price: 13000,
		stock: 14,
		picUrl:
			"https://i.ibb.co/fHhckxk/cachimba-kaya-elox-eco-slice-small-rose-550x550h.jpg",
		description:
			"La cachimba Kaya ELOX ECO Slice Small Rosegold es la versión más elegante de la ECO Slice Small. De aluminio, con 54 cm de altura y una apariencia de escándalo, con el rosa oro como protagonista.",
	},
	{
		id: 9,
		category: "narguilas",
		title: "Aeon V4",
		brand: "Lounge Jungle",
		price: 24000,
		stock: 3,
		picUrl:
			"https://i.ibb.co/ZY4gnsm/cachimba-aeon-edition-3-lounge-jungle-550x550.png",
		description:
			"La cachimba AEON Hookah Edition 4 - Lounge Jungle es la versión mejorada de la Edition 3. Como todos los productos de AEON, ha sido producida en Alemania bajo los más altos estándares de calidad, incluyendo como material principal el acero inoxidable V2A. ",
	},
	{
		id: 10,
		category: "narguilas",
		title: "Set Twist Glow",
		brand: "Kaya Elox Eco",
		price: 21000,
		stock: 6,
		picUrl:
			"https://i.ibb.co/jTXd4D1/cachimba-kaya-set-maletin-completo-elox-eco-580-twist-glow-550x550h.jpg",
		description:
			"Simple, pero elegante: así es la nueva cachimba Kaya ELOX Eco Ezra - Matt Blue. Su montaje es sencillo y rápido gracias al sistema Click, que nos permite conectar el cuerpo con la base con un simple movimiento. Todas las partes metálicas están fabricadas en aluminio.",
	},
	{
		id: 11,
		category: "narguilas",
		title: "Red Clear",
		brand: "Vyro Penta",
		price: 19650,
		stock: 4,
		picUrl:
			"https://i.ibb.co/s1QvSkd/cachimba-vyro-penta-red-clear-hookah-550x550.jpg",
		description:
			"Una auténtica revolución llega con la Vyro Penta Red Clear, la cachimba compacta de la que todo el mundo habla. Esta shisha combina el acero inoxidable V2A con la fibra de carbono real, la resina y la madera (impermeable), dando lugar a un auténtico espectáculo.",
	},
]

const task = new Promise((resp) => {
	resp(products)
}, 2000)

export const getItem = () => {
	return task
}
