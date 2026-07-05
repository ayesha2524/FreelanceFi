const express = require('express')
const AuthRoutes = express.Router()
const AuthController = require('../controller/AuthController')
const auth =require('../middleware/auth')

AuthRoutes.post('/create-profile', AuthController.createProfile)
AuthRoutes.post('/check-user', AuthController.checkUser)
AuthRoutes.get('/logout', AuthController.logout)
AuthRoutes.get('/:address', auth , AuthController.fetchUsers)
AuthRoutes.patch('/:walletAddress',auth, AuthController.ratingUsers)
AuthRoutes.get('/freelancers/:walletAddress' ,AuthController.fetchFreelancer)
module.exports = AuthRoutes