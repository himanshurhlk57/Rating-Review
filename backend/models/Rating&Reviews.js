const mongoose = require("mongoose");

const ratingReviewSchema = new mongoose.Schema({
  movieId: {
    type: Number,
    required: true,
  },
  reviews: [
    {
      // userId: {
      //   type: Number,
      //   required: true,
      //   default: mongoose.
      // },
      star: {
        type: Number,
        required: true,
      },
      review: {
        type: String,
        required: true,
      },
    },
  ],
});

const RatingReview = mongoose.model("RatingReview", ratingReviewSchema);

module.exports = RatingReview;
