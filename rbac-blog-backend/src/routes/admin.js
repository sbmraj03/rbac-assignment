const express = require('express');
const { authenticateUser, authorizeRoles } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/create-post', authenticateUser, authorizeRoles('admin'), (req, res) => {
  res.json({ message: 'Blog post created successfully!' });
});

module.exports = router;