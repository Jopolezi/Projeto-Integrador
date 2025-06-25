const express = require('express');
const router = express.Router();

const RatingController = require('../controllers/ratingController'); 
const { verifyToken } = require('../middlewares/authJWT');

const ratingController = new RatingController()

router.get('/users/:userId/average', ratingController.getAverageUserRating.bind(ratingController))

router.post("/", verifyToken, ratingController.createRating.bind(ratingController))

module.exports = router;