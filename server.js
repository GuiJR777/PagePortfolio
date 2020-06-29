const express= require('express')
const nunjucks= require('nunjucks')

const server= express()

server.use(express.static("public"))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server
})

server.get("/", function(req, res){
    return res.render('apresentation')
})
server.get("/curriculo", function(req, res){
    return res.render('curriculo')
})
server.get("/projetos", function(req, res){
    return res.render('projetos')
})

server.listen(5000, function(){
    console.log('Servidor Pronto na porta 5000!')
})