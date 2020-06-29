const router = require('express').Router();
const db = require('../models');


// /api/workouts
router.get("/workouts", function (req, res) {
  db.Workout.find({})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      console.log(err)
      console.log(err.message)
      res.status(400).json(err);
    });
});

router.post("/workouts", function (req, res) {
  db.Workout.create(req.body)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/workouts/:id", function (req, res) {
  console.log(req.body);

  db.Workout.update({
    _id: req.params.id
  }, {
    $push: { exercises: req.body }
  })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});


router.get("/workouts/range", function (req, res) {
  db.Workout.find({})
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });

})

module.exports = router;