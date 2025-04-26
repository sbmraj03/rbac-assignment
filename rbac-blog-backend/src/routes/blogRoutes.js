const express = require('express');
const router = express.Router();
const Blog = require('../models/BlogPost');
const { authenticateUser, authorizeRoles } = require('../middleware/authMiddleware');


router.get('/', async (req, res) => {
  try {
    const blogs = await Blog.find().populate('author', 'name');
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blogs' });
  }
});

router.post('/', authenticateUser, authorizeRoles('admin'), async (req, res) => {
  try {
    const { title, content } = req.body;
    const blog = new Blog({
      title,
      content,
      author: req.user.id, // Take the ID from token
    });
    await blog.save();
    res.status(201).json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Error creating blog' });
  }
});

// Update a blog post
router.put('/:id', authenticateUser, authorizeRoles('admin'), async (req, res) => {
    try {
      const { title, content } = req.body;
      const blog = await Blog.findByIdAndUpdate(
        req.params.id,
        { title, content },
        { new: true }
      );
      res.json(blog);
    } catch (error) {
      res.status(500).json({ message: 'Error updating blog' });
    }
  });
  
  // Delete a blog post
  router.delete('/:id', authenticateUser, authorizeRoles('admin'), async (req, res) => {
    try {
      await Blog.findByIdAndDelete(req.params.id);
      res.json({ message: 'Blog deleted successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error deleting blog' });
    }
  });
  

module.exports = router;



