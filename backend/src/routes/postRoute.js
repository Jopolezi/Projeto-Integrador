const express = require('express');
const router = express.Router();
const PostController = require('../controllers/postController'); // Importa a CLASSE
const { verifyToken } = require('../middlewares/authJWT');
const { isPostOwner } = require('../middlewares/postOwner');

// Instanciar a classe
const postController = new PostController();

// Rotas GET (sem middleware de autenticação)
router.get('/', postController.getAllPosts.bind(postController));
router.get('/user/:userId', postController.getUserPosts.bind(postController));
router.get('/:id', postController.getPostById.bind(postController));

// Rotas que modificam dados (com middleware de autenticação)
router.post('/', verifyToken, postController.createPost.bind(postController));
router.put('/:id', verifyToken, isPostOwner, postController.updatePost.bind(postController));
router.delete('/:id', verifyToken, isPostOwner, postController.deletePost.bind(postController));

module.exports = router;