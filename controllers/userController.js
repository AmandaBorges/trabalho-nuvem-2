const bcrypt = require("bcrypt");
const { PrismaClient } = require('@prisma/client');
const md5 = require('md5');
const prisma = new PrismaClient();
const saltRounds = 10;

exports.login = (req, res, next) => {
    res.render('login', { title: 'Trabalho Desenvolvimento de Software em Nuvem' });
}

exports.register = (req, res, next) => {
    res.render('register', { title: 'Trabalho Desenvolvimento de Software em Nuvem' });
}

exports.users = (req, res, next) => {
    var users = prisma.user.findMany().then(users => {
        console.log(users);
        res.render('listUsers', { users: users });
    });
}

exports.create = (req, res, next) => {
    var finalPassword = md5(req.body.password);
    prisma.$connect().then(conn=>{
        prisma.user.create({ data:
            {
                email:    req.body.email,
                nome:     req.body.nome,
                password: finalPassword,
                is_admin: true
            }
        }).then(user => {
            prisma.$disconnect().then(dis=>{
                res.status(201).json({message:"Salvo com sucesso!"})
            })
        })
    })
}

exports.delete = (req, res, next) => {
    prisma.user.delete({
        where: {
            id: req.body.id
        }
    }).then(result => {
        res.json("Excluído");
    });
    
}

exports.postLogin = (req, res, next) => {
    var user = prisma.user.findFirst({
        where: {
            email: req.body.username
        }
    }).then(user => {
        if(user !== null && user !== undefined) {
            var finalPassword = md5(req.body.password);
            console.log(finalPassword, user.password)
            if(finalPassword===user.password) {
                res.json({message:"Sucesso!"});
            } else {
                res.status(401).json({message:"Usuário ou senha incorretos cadastrado"});
            }
        } else {
            res.status(401).json({message:"Usuário ou senha incorretos cadastrado"});
        }
    })
}

function validateUser(hash, password) {
    bcrypt
      .compare(password, hash)
      .then(res => {
        return res // return true
      })
      .catch(err => console.error(err.message))        
}