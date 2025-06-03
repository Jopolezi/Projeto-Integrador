const express = require('express');
const router = express.Router();

const RatingController = require('../controllers/ratingController'); 
const { verifyToken } = require('../middlewares/authJWT');

const ratingController = new RatingController()

router.get("/company/:userId/average", ratingController.getAverageFirmRatings.bind(ratingController))


router.post("/", verifyToken, ratingController.createRating.bind(ratingController))

module.exports = router;