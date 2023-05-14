const mongoose = require("mongoose")
const PostSchema = new mongoose.Schema(
    {
        user: [{type: mongoose.Types.ObjectId, ref: "users"}],
        content: {type: String, required: true},
        tittle:{type: String, required: true}
    },
    {
        timestamps: true,
        collection: "posts",
      }
)

  const Post = mongoose.model("posts", PostSchema);
module.exports = Post;