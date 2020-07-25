const route = require('express').Router()
const UserControllers = require('../controllers/UserControllers')

route.post('/register', UserControllers.register)
route.post('/login', UserControllers.login)

module.exports = route