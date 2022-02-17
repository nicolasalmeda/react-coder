const products = [
  {
    id: 1,
    name: "Copa Vino ",
    price: "usd 10",
    category: "home",
    img: "https://http2.mlstatic.com/D_NQ_NP_993390-MLA43558845578_092020-O.webp",
    stock: 25,
    description: "Copas de vino pack x6 ,degustación",
  },
  {
    id: 2,
    name: "Termo Lumilagro",
    price: "usd 800",
    category: "home",
    img: "https://http2.mlstatic.com/D_NQ_NP_946759-MLA42441068380_072020-O.webp",
    stock: 16,
    description:
      "La marca argentina continúa su desarrollo como empresa líder en la fabricación de productos térmicos hace ya 75 años.",
  },
  {
    id: 3,
    name: "Cubiertos Tramontina 24 ",
    price: "usd 1200",
    category: "home",
    img: "https://http2.mlstatic.com/D_NQ_NP_701282-MLA31351985981_072019-O.webp",
    stock: 10,
    description: "Juego Cuchillos Tenedores Acero Inox",
  },
  {
    id: 4,
    name: "Cafetera Magefasa",
    price: "usd 1000",
    category: "home",
    img: "https://http2.mlstatic.com/D_NQ_NP_721546-MLA43533011483_092020-O.webp",
    stock: 25,
    description:
      "Empezá tu día con energía y de la mejor manera, disfrutando de la textura y calidad de un buen café en la comodidad de tu casa.",
  },
  {
    id: 5,
    name: "Vaso Con Tapa Y Sorbete",
    price: "usd 0.5",
    category: "home",
    img: "https://http2.mlstatic.com/D_NQ_NP_873468-MLA48328881175_112021-O.webp",
    stock: 25,
    description: "Producto: Vaso termico Star con sorbete tipo starbucks",
  },
  {
    id: 6,
    name: "Juego de mesa Simon",
    price: "usd 8",
    category: "toys",
    img: "https://http2.mlstatic.com/D_NQ_NP_692207-MLA47660946770_092021-O.webp",
    stock: 25,
    description: "Comprometida en hacer del mundo un lugar mejor",
  },
  {
    id: 7,
    name: "Monky loco Ditoys",
    price: "usd 10",
    category: "toys",
    img: "https://http2.mlstatic.com/D_NQ_NP_912464-MLA44676626099_012021-O.webp",
    stock: 25,
    description: "Con el Monky loco vas a crear divertidos recuerdos",
  },
  {
    id: 8,
    name: "Bingo bolillero",
    price: "usd 5",
    category: "toys",
    img: "https://http2.mlstatic.com/D_NQ_NP_984834-MLA46557350041_062021-O.webp",
    stock: 25,
    description:
      "Con el Bingo Bolillero metal vas a crear divertidos recuerdos y pasar momentos inolvidables",
  },
  {
    id: 9,
    name: "UNO",
    price: "usd 3",
    category: "toys",
    img: "https://http2.mlstatic.com/D_NQ_NP_942888-MLA46738841701_072021-O.webp",
    stock: 25,
    description: "Definitivamente el Uno",
  },
  {
    id: 10,
    name: "Bloques para armar",
    price: "usd 20",
    category: "library",
    img: "https://http2.mlstatic.com/D_NQ_NP_683488-MLA48734494296_012022-O.webp",
    stock: 25,
    description:
      "Antex cuenta con 50 años de trayectoria en la fabricación de juguetes ",
  },
  {
    id: 11,
    name: "Boligrafo parker",
    price: "usd 100",
    category: "library",
    img: "https://http2.mlstatic.com/D_NQ_NP_760449-MLA48087000026_112021-O.webp",
    stock: 25,
    description:
      "Boligrafo Parker Jotter Acero Plateada CLIP DORADO + Grabado Incluido!",
  },
  {
    id: 12,
    name: "Libreta",
    price: "usd 1.5",
    category: "library",
    img: "https://http2.mlstatic.com/D_NQ_NP_821132-MLA45033101680_022021-O.webp",
    stock: 25,
    description: "Libreta Simple Pocket Rayada 80 Hojas Diseño Sustentable",
  },
  {
    id: 13,
    name: "Goma Maped",
    price: "usd 0.5",
    category: "library",
    img: "https://http2.mlstatic.com/D_NQ_NP_685916-MLA44003501676_112020-O.webp",
    stock: 25,
    description: "Goma Maped Technic Duo Azul Y Blanca",
  },
  {
    id: 14,
    name: "Regla Metal",
    price: "usd 2.5",
    category: "library",
    img: "https://http2.mlstatic.com/D_NQ_NP_662368-MLA48073895068_102021-O.webp",
    stock: 25,
    description: "Regla Metal 100 Cm - 1 Metro Acero Inoxidable",
  },
  {
    id: 15,
    name: "Regla Pizzini",
    price: "usd 0.5",
    category: "library",
    img: "https://http2.mlstatic.com/D_NQ_NP_681782-MLA46857318660_072021-O.webp",
    stock: 25,
    description: "Tijera Pizzini 21cm Acero Inoxidable Ps72c",
  },
];

export const getProducts = (category) => {
  return new Promise((resolve) => {
    if (category === undefined) {
      setTimeout(() => {
        resolve(products);
      }, 3000);
    } else {
      const cat = products.filter((p) => p.category === category);
      setTimeout(() => {
        resolve(cat);
      }, 3000);
    }
  });
};

export const getProduct = (id) => {
  return new Promise((resolve) => {
    const prod = products.find((p) => p.id === parseInt(id));
    setTimeout(() => {
      resolve(prod);
    }, 3000);
  });
};