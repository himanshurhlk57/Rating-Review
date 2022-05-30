const express = require("express");
const Router = express.Router();
const RatingReview = require("../models/Rating&Reviews");

Router.post("/:id", async (req, res) => {
  try {
    const movieId = req.params.id;
    const { reviews } = req.body;
    console.log(reviews);
    let ratingAndReview = new RatingReview({
      movieId: movieId,
      reviews: reviews,
    });
    await ratingAndReview.save();
    res.status(200).json({ message: "Document created successfully" });
  } catch (err) {
    console.log(err);
  }
});

// Router.get("/:id", async (req, res) => {
//   try {
//     const movieId = req.params.id;
//     const ratingAndReviewDocument = await RatingReview.find({
//       movieId: movieId,
//     });
//     res.json(ratingAndReviewDocument);
//   } catch (err) {
//     console.log(err);
//   }
// });

module.exports = Router;
