const express = require('express')
const nunjucks = require('nunjucks')
const data = require('./data')

const server = express()

nunjucks.configure('views', {
    express: server
})

server.set('view engine', 'njk')

server.use(express.static('public'))

server.get('/courses', function(req, res){
    return res.render('content', { blogs: data })
})

server.get('/about', function(req, res){
    const about = {
        images: "https://avatars0.githubusercontent.com/u/28929274?s=200&v=4",
        name: "Rocketseat",
        description: "Evolua rápido como a tecnologia",
        links: [
            { name: "Github", url: "https://github.com/Rocketseat" },
            { name: "Instagram", url: "http://instagram.com/rocketseat_oficial" },
            { name: "Facebook", url: "http://fb.com/rocketseat" }
        ]
    }
    return res.render('about', { about })
})

server.get('/course/:id', function(req, res){
    const id = req.params.id
    const course = data.find(function(course){
        if (course.id == id) {
            return true
        }
    })

    if (!course){
        return res.render('not-found')
    }

    return res.render('course', { blog: course })
})

server.use(function(req, res) {
    res.status(404).render("not-found");
  });

server.listen(5000, function(){
    console.log("Server is running!")
})