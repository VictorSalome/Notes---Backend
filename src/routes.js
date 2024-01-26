const express = require('express')

const routes = express.Router()

const AnnotationController = require('./controllers/AnnotationController')


//Rota Annotations
routes.get('/annotations', AnnotationController.create)

module.exports = routes