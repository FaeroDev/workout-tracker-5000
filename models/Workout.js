const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const Workoutschema = new Schema({
    name:{
        type: String,
        trim: true,
        required:"enter a name for workout",
    },
    exercises:{
        type:Schema.Types.ObjectId,
        ref: "Exercise",
    },
})

const Workout = mongoose.model('Workout', Workoutschema);

module.exports = Workout;