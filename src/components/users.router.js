const router = require('express').Router()

const usersServices = require('./users.services')

router.get('/users', usersServices.getAllUsers)
router.post('/users', usersServices.postNewUser)
router.get('/users/:id', usersServices.getUsersById)

module.exports = router