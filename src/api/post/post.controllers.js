const Post = require("./post.model")
const createPost = async (req, res, next) => {
    try {
      const newPost = await new Post(req.body);
      await newPost.save();
      return res.json(newPost);
    } catch (error) {
      return next(error);
    }
  };
  const getPostById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const post = await Post.findById(id);
      if (!post) {
        return res.json("No se encuentra el Post, no se reconoce ese id");
      }
      return res.json(post)
    } catch (error) {
      return next(error)
    }
  };
  const getPosts = async (req, res, next) => {
    try {
      const posts = await Post.find();
      return res.json(posts);
    } catch (error) {
      return res.json(`No hemos podido acceder a los Posts ${error}`);
    }
  };
  const deletePostById = async(req, res, next)=>{
  
      try {
          const { id } = req.params
          const post = await Post.findByIdAndDelete(id)
          if (!post) {
              return res.json("no hemos podido encontrar ese coche con ese id")
          }
          return res.status(200).json(post)
      } catch (error) {
          return next(error)
      }
  }
  const updatePostById = async (req, res, next)=>{
      try {
          const { id } = req.params
          const postUpdated = await Post.findByIdAndUpdate(id, req.body,{new: true})
          return res.status(200).json(postUpdated)
      } catch (error) {
          return next(error)
      }
  }

  module.exports = {updatePostById, deletePostById, getPosts, getPostById, createPost}