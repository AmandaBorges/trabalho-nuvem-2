const fs = require('fs');

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

exports.create = (request, response) => {
  response.render("addProduct");
};

exports.store = (request, response) => {
  var products = require("../mocks/products.json");
  var product = {
    "id": products.length+1,
    "category": request.body.category,
    "slug": request.body.slug,
    "title": request.body.title,
    "material": request.body.material,
    "size": request.body.size,
    "packing": request.body.packing,
    "value": request.body.value,
    "is_highlight": request.body.is_highlight == 'on' ? 1 : 0,
    "image": request.body.image
  }

  products.push(product);
  console.log(request.body);
  const jsonContent = JSON.stringify(products);
  fs.unlinkSync("./mocks/products.json");
  fs.writeFile("./mocks/products.json", jsonContent, 'utf8', function (err) {
      if (err) {
          return console.log(err);
      }
      console.log("The file was saved!");
  }); 

  response.redirect('/admin/products')
};

exports.list = (request, response) => {
  var products = require("../mocks/products.json");
  response.render("adminList", { products });
};

exports.delete = (request, response) => {
  var products = require("../mocks/products.json");
  products.forEach(function(item, index, arr) {
    console.log(1);
    if(item.slug == request.params.slug) {
      products.splice(index, 1);
      console.log(products);
    }
  });
  console.log(3);
  console.log(4);
  const jsonContent = JSON.stringify(products);
  fs.unlinkSync("./mocks/products.json");
  fs.writeFile("./mocks/products.json", jsonContent, 'utf8', function (err) {
      if (err) {
          return console.log(err);
      }
      console.log("The file was saved!");
  }); 
  console.log(5);
  response.status(204);
  response.json({"message":"excluído com sucesso!"})
};

exports.categories = (req, res, next) => {
  res.render("categories");
}

exports.products = (req, res, next) => {  
  console.log(req.query.category);
  var products = require("../mocks/products.json");
  if(req.query.category != undefined){
    var filterCagory = [];
    products.forEach(function(item, index, arr) {
      if(item.category == req.query.category) {
        filterCagory.push(item);
      }
    });
    res.render("products", { products: filterCagory});
  }

  res.render("products", { products: products});
}

exports.buyProduct = (req, res, next) => {
  var products = require("../mocks/products.json");
  var product = null;
  products.forEach(function(item, index, arr) {
    if(item.slug == req.params.slug) {
      product = item
    }
  });

  res.render("buyProduct", { product: product});
}