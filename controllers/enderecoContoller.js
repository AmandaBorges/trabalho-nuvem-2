const axios = require('axios');

exports.home = (req, res, next) => {
    res.render('index', { title: 'Trabalho Desenvolvimento de Software em Nuvem' });
}

exports.routes = (req, res, next) => {
    res.render('routes', { title: 'Acesse nossos links' });
}

exports.addressByZipCode = (req, res, next) => {
    res.render('address', { title: 'Trabalho Desenvolvimento de Software em Nuvem' });
}

exports.zipCodeByAddress = (req, res, next) => {
  res.render('cep', { title: 'Trabalho Desenvolvimento de Software em Nuvem' });
}

exports.getZipCode = (req, res, next) => {
    axios.get('https://viacep.com.br/ws/'+req.query.cep+'/json/')
  .then(function (response) {
    console.log(response.data);
    res.json(response.data);
  })
  .catch(function (error) {
    res.json(error);
  });
}

exports.getAddress = (req, res, next) => {
    axios.get('https://viacep.com.br/ws/'+req.query.state+'/'+req.query.city+'/'+req.query.place+'/json/')
  .then(function (response) {
    console.log(response.data);
    res.json({cep: response.data[0].cep});
  })
  .catch(function (error) {
    res.json(error);
  });
}