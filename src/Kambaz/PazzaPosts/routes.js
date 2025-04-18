import * as dao from "./dao.js";

export default function PazzaPostRoutes(app) {
  const createPost = async (req, res) => {
    const post = await dao.findPostById(req.body._id);
    if (post) {
      res.status(400).json({ message: "Post already exists" });
      return;
    }
    const newPost = await dao.createPost(req.body);
    res.json(newPost);
  };

  const findAllPosts = async (req, res) => {
    const posts = await dao.findAllPosts();
    res.json(posts);
  };

  const findPostById = async (req, res) => {
    const post = await dao.findPostById(req.params.postId);
    res.json(post);
  };

  const updatePost = async (req, res) => {
    const { postId } = req.params;
    const postUpdates = req.body;
    await dao.updatePost(postId, postUpdates);
    res.json(updatedPost);
  };

  app.post("/api/pazzaPosts", createPost);
  app.get("/api/pazzaPosts", findAllPosts);
  app.get("/api/pazzaPosts/:postId", findPostById);
  app.put("/api/pazzaPosts/:postId", updatePost);
}
