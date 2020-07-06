const express= require('express')
const nunjucks= require('nunjucks')

const server= express()
const projetos= require('./data')

const userdata= {
    img:'https://avatars1.githubusercontent.com/u/55406858?s=460&u=2aef596e0d53fe01ed5b3b3ada4a8cf5b051d756&v=4',
    name: 'Guilherme Jesuino Ramires',
    title: 'Graduando em <a href="http://sin.inf.ufsc.br/sobre-o-curso/descricao/" target="_blank">Sistemas de Informação</a> pela <a href="https://estrutura.ufsc.br/" target="_blank">UFSC</a> e estudando Desenvolvimento Web.',
    presentation: 'Sou estudante de Sistemas de Informação pela Universidade Federal de Santa Catarina, e tenho estudado desenvolvimento web pela internet. Aprendi programação com a linguagem Python e estou me desenvolvendo em HTML5, CSS3 e Javascript, alem de estar aprendendo os frameworks Django, React e React Native. Estou a 5 anos no mercado de trabalho, mas ainda não possuo experiência na área de desenvolvimento.',
    objective1: 'Tenho como objetivo profissional a recolocação no mercado de trabalho na área de desenvolvimento web, mobile ou de software, e a longo prazo, atingir o status de Desenvolvedor FullStack.',
    objective2: 'Acredito que a melhor forma de aprendizado é com a prática e por isso estou em busca de uma oportunidade na área. Também tenho interesse em trabalhos freelancers e/ou por encomenda, tanto para aprendizado quanto para ganho de experiência',
    web: [
        {name: 'Whatsapp', url: 'https://api.whatsapp.com/send?phone=5548984634295', icon: '/img/whatsapp.svg'},
        {name: 'Instagram', url: 'https://www.instagram.com/guilhermejramires/?hl=pt-br', icon: '/img/instagram-esbocado.svg'},
        {name: 'Github', url: 'https://github.com/GuiJR777', icon: '/img/github.svg'},
        {name: 'Linkedin', url: 'https://www.linkedin.com/in/guilherme-ramires-4480a0160', icon: '/img/linkedin.svg'},
        {name: 'Email', url: 'mailto:guilhermejramires@gmail.com', icon: '/img/gmail.svg'}
    ],
    tec:[
        {name: 'HTML5', icon: '/img/html5.svg'},
        {name: 'CSS3', icon: '/img/css.svg'},
        {name: 'Javascript', icon: '/img/javascript.svg'},
        {name: 'Python', icon: '/img/icons8-python.svg'},
        {name: 'Django', icon: '/img/icons8-django.svg'},
        {name: 'React e React Native', icon: '/img/icons8-reagir.svg'}
    ]
}



server.use(express.static("public"))

server.set('view engine', 'njk')

nunjucks.configure('views', {
    express: server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res){
    return res.render('apresentation', {userdata})
})
server.get("/curriculo", function(req, res){
    return res.render('curriculo', {userdata})
})
server.get("/projetos", function(req, res){
    return res.render('projetos', {items: projetos, userdata})
})

server.get("/projeto" , function(req, res){
    const id= req.query.id

    const projeto= projetos.find(function(projeto){
        return projeto.id == id
        
    })

    if (!projeto){
        return res.send('Projeto não encontrado!')
    }

    return res.render("pagprojeto", { projeto, userdata })
})

server.listen(5000, function(){
    console.log('Servidor Pronto na porta 5000!')
})