const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const { authenticateToken, isPostOwner } = require('../middlewares/authMiddleware');

router.get('/', postController.getAllPosts);
router.get('/user/:userId', postController.getUserPosts);
router.get('/:id', postController.getPostById);

router.post('/', authenticateToken, postController.createPost);
router.put('/:id', authenticateToken, isPostOwner, postController.updatePost);
router.delete('/:id', authenticateToken, isPostOwner, postController.deletePost);

module.exports = router;