const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

nunjucks.configure('views', {
    express: server
})

server.set('view engine', 'njk')

server.use(express.static('public'))

server.get('/courses', function(req, res){
    return res.render('content')
})

server.get('/about', function(req, res){
    return res.render('about')
})

server.use(function(req, res) {
    res.status(404).render("not-found");
  });

server.listen(5000, function(){
    console.log("Server is running!")
})