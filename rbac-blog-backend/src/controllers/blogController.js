const BlogPost = require('../models/BlogPost');

// Create a new blog post (admin only)
exports.createPost = async (req, res) => {
  const { title, content } = req.body;
  try {
    const newPost = new BlogPost({
      title,
      content,
      author: req.user.id,
    });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all blog posts (public)
exports.getPosts = async (req, res) => {
  try {
    const posts = await BlogPost.find().populate('author', 'name email');
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update a blog post (admin only)
exports.updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, content } = req.body;
  try {
    const updatedPost = await BlogPost.findByIdAndUpdate(
      id,
      { title, content },
      { new: true }
    );
    if (!updatedPost) return res.status(404).json({ message: 'Post not found' });
    res.status(200).json(updatedPost);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a blog post (admin only)
exports.deletePost = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPost = await BlogPost.findByIdAndDelete(id);
    if (!deletedPost) return res.status(404).json({ message: 'Post not found' });
    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};