const express = require('express')
const instructors = require('./instructors')
const routes = express.Router()


routes.get('/', function(req, res){
    return res.redirect("/instructors")
})


routes.get('/instructors', function(req, res){
    return res.render('instructors/index')
})

routes.get('/create', function(req,res){
    return res.render('instructors/create')
})

routes.get('/instructors/:id', instructors.show)

routes.get('/instructors/:id/edit', function(req, res){
    return res.render('instructors/edit')
})



routes.post("/instructors", instructors.post)


routes.get('/members', function(req, res){
    return res.send('ok!')
})

module.exports = routes