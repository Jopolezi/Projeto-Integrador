const express = require('express');
const router = express.Router();
const PostController = require('../controllers/postController'); 
const { verifyToken } = require('../middlewares/authJWT');
const { isPostOwner } = require('../middlewares/postOwner');

const postController = new PostController();

router.get('/', postController.getAllPosts.bind(postController));
router.get('/user/:userId', postController.getUserPosts.bind(postController));
router.get('/:id', postController.getPostById.bind(postController));

router.post('/', verifyToken, postController.createPost.bind(postController));
router.put('/:id', verifyToken, isPostOwner, postController.updatePost.bind(postController));
router.delete('/:id', verifyToken, isPostOwner, postController.deletePost.bind(postController));

module.exports = router;  