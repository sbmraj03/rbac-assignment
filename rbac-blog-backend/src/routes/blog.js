const express = require('express');
const { authenticateUser, authorizeRoles } = require('../middleware/authMiddleware');
const { createPost, getPosts, updatePost, deletePost } = require('../controllers/blogController');
const router = express.Router();

router.get('/', getPosts); // Public route
router.post('/', authenticateUser, authorizeRoles('admin'), createPost); // Admin route
router.put('/:id', authenticateUser, authorizeRoles('admin'), updatePost); // Admin route
router.delete('/:id', authenticateUser, authorizeRoles('admin'), deletePost); // Admin route

module.exports = router;