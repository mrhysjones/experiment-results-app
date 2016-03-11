var express = require('express');
var router = express.Router();

var Result = require('../models/Results.js');

/* GET /api/results */
router.get('/', function(req, res, next) {
	Result.find(function (err, results) {
		if (err) return next(err);
		res.json(results);
	});
});

/* GET /api/results/id */
router.get('/:id', function(req, res, next) {
  Result.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


// POST /api/results
router.post('/', function(req, res, next) {
  Result.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* PUT /api/results/:id */
router.put('/:id', function(req, res, next) {
  Result.findByIdAndUpdate(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});


/* DELETE /results/:id */
router.delete('/:id', function(req, res, next) {
  Result.findByIdAndRemove(req.params.id, req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
