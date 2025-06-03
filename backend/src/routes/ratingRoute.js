const express = require('express');
const router = express.Router();

const RatingController = require('../controllers/ratingController'); 
const { verifyToken } = require('../middlewares/authJWT');

const ratingController = new RatingController()

router.get("/company/:userId/average", ratingController.getAverageCompanyRatings.bind(ratingController))
router.get("/employee/:userId/average", ratingController.getAverageEmployeeRatings.bind(ratingController))
router.get("/userToUser/:userId/average", ratingController.getAverageUserToUserRating.bind(ratingController))

router.post("/", verifyToken, ratingController.createRating.bind(ratingController))

module.exports = router;