function listReviews(req, res) {
  res.json({ message: 'Reviews module initialized', reviews: [] });
}

module.exports = { listReviews };
