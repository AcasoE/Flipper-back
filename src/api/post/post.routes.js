const { updatePostById, deletePostById, getPosts, getPostById, createPost } = require("./post.controllers");
const { isAuth, isAdmin } = require("../middlewares/auth");
const postsRoutes = require('express').Router();

postsRoutes.post("/create" , [isAuth],createPost )
postsRoutes.put("/update/:id",[isAuth],updatePostById)
postsRoutes.delete("/delete/:id",[isAuth], deletePostById)
postsRoutes.get("/:id",[isAuth],getPostById)
postsRoutes.get("/", getPosts )

module.exports = { postsRoutes }