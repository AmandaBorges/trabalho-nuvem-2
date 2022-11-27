let productList = [
  {
    id: 1,
    name: "Izuku Midoriya (deku) Brush Style Bwfc - My Hero Academia - Banpresto",
    description:
      "Descrição do produto- Fabricante: Banpresto- Material: PVC e ABS- Tamanho: 21 cm- Ref.: 22195 / 22196 - Franquia: Boku no Hero Academia- Importadora: Oderço- EAN: 045557221959",
    price: "R$ 765,39",
    image: "https://m.media-amazon.com/images/I/41Zu0vPmu+S._AC_.jpg",
  },
  {
    id: 2,
    name: "All Might - Miniatura Colecionável Smash My Hero Academia vs 9cm",
    description:
      "Coleção surpresa e individual com os principais personagens da primeira fase do anime My Hero Academia. Nesta coleção de figuras, podemos encontrar aleatoriamente, os personagens: Izuku Midoriya, All Might, Katsuki Bakugou, Shoto To...",
    price: "R$ 71,91",
    image:
      "https://images-americanas.b2w.io/produtos/4378200741/imagens/all-might-miniatura-colecionavel-smash-my-hero-academia-vs-9cm/4378200741_1_xlarge.jpg",
  },
  {
    id: 3,
    name: "Tomura Shigaraki - Artfx J - My Hero Academia - Kotobukiya",
    description:
      "Coleção surpresa e individual com os principais personagens da primeira fase do anime My Hero Academia. Nesta coleção de figuras, podemos encontrar aleatoriamente, os personagens: Izuku Midoriya, All Might, Katsuki Bakugou, Shoto To...",
    price: "R$ 762,91",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_919028-MLB48210975211_112021-O.webp",
  },
  {
    id: 4,
    name: "Travesseiro Dakimakura Boku no Hero Uraraka",
    description:
      "Descrição - Tamanho aproximado: Pequeno-60x20cm Médio-90x30cm Grande-1,60x55cm GG-1,82x62cm- Material tactel (100% Poliester) - Enchimento de fibra siliconada antialérgica - Impressão digital de alta resolução - Estampa impressa...",
    price: "R$ 39,00",
    image: "https://cf.shopee.com.br/file/cf58836d587683f66d8261d92ffaa91e",
  },
  {
    id: 5,
    name: "Mirko Bunny Colecionável 14cm Em Resina",
    description:
      "Colecionável impresso em resina semi-flexível de alta resistência à impactos e quedas. Mirko Bunny Fan Art foi Modelado por Printed Obsession, todos os direitos reservados.",
    price: "R$ 89,99",
    image:
      "https://http2.mlstatic.com/D_NQ_NP_2X_945737-MLB50741911973_072022-F.webp",
  },
];

exports.routes = (request, response) => {
  response.render("felipeRoutes", { title: "MENU INICIAL" });
};

//lista de todos os produtos
exports.index = (request, response) => {
  response.render("main", { productList, title: "LOJA BOKU NO HERO" });
};
//informações de um produto
exports.show = (request, response) => {
  const findProduct = productList.find(function (product) {
    return product.id == request.params.id;
  });

  response.render("product", { findProduct, title: "LOJA BOKU NO HERO" });
};
//quantidade de um produto
exports.quantity = (request, response) => {
  const findProduct = productList.find(function (product) {
    return product.id == request.params.id;
  });

  response.render("productQuantity", {
    findProduct,
    title: "LOJA BOKU NO HERO",
  });
};

exports.createP = (request, response) => {
  response.render("addProduct");
};

exports.store = (request, response) => {
  let { nomeP, valorP, descricaoP, imgP } = request.body;
  let produtoN = {
    id: Number(productList[productList.length - 1].id) + 1,
    name: nomeP,
    description: descricaoP,
    price: "R$" + valorP,
    image: imgP,
  };
  productList.push(produtoN);
  response.redirect("/main");
};

exports.list = (request, response) => {
  response.render("adminList", { productList });
};

exports.delete = (request, response) => {
  let { idP } = request.body;

  productList = productList.filter((product) => product.id != idP);

  response.redirect("/main");
};
