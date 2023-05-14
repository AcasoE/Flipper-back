const { isAuth } = require('../middlewares/auth')
const uploadImage = require('../middlewares/file')
const { getAllUsers, registerUser, loginUser, checkSession,  } = require('./users.controllers')
const userRoutes = require('express').Router()
userRoutes.post("/register",uploadImage.single('image'), registerUser)
userRoutes.post("/login", loginUser)
userRoutes.get("/check",[isAuth], checkSession)
userRoutes.get("/" ,getAllUsers)

module.exports = {userRoutes}