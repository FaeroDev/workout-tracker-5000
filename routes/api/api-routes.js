const router = require("express").Router();
// const Transaction = require("../models/transaction.js");
const { Workout } = require("../../models");


// module.exports = (app) => {
  
// app.post("/api/workouts", ({ body }, res) => {
//   Workout.create(body)
//     .then(dbWorkout => {
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// app.post("/api/workouts/bulk", ({ body }, res) => {
//   Workout.insertMany(body)
//     .then(dbWorkout => {
//       res.json(dbWorkout);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });

// app.get("/api/workouts", (req, res) => {
//   Workout.find({})
//     // .sort({ date: -1 })
//     .then(data => {
//       console.log(data)
//       res.json(data);
//     })
//     .catch(err => {
//       res.status(400).json(err);
//     });
// });
// }


router.get("/api/workouts", (req, res) => {
  Workout.find({})
    .sort({ date: -1 })
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.find({})
  .limit(7)
  .sort({ date: -1 })
  .then(data => {
    res.json(data);
  })
  .catch(err => {
    res.status(400).json(err);
  });

})

router.post('/api/workouts', (req, res) => {
  Workout.create({})
  .then((data) => res.json(data))
  .catch(err => res.status(400).json(err)
  );
})

router.put('/api/workouts/:id', (req, res) => {
  Workout.findByIdAndUpdate(
    req.params.id, {
      $push: {exercises: [req.params.body]}
    },
    {new: true, runValidators: true}
  )
  .then((data) => res.json(data))
  .catch(err => res.status(400).json(err))
})




module.exports = router;
