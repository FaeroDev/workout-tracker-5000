const router = require("express").Router();
const db = require("../../models/Workout");

router.get("/api/workouts", (req, res) => {
  db.find({})
    .sort({ date: -1 })
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  db.find({})
    .then((dbdata) => {
      res.json(dbdata);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts", ({ body }, res) => {
  db.create(body)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  db.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } }
    // {new: true, runValidators: true}
  )
    .then((dbdata) => {
      console.dir(dbdata);
      res.status(200).json(dbdata);
    })
    .catch((err) => res.status(400).json(err));
});

module.exports = router;
