const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ExerciseSchema = new Schema({
    name: {
        type: String,
        unique: true,
        trim: true,
        required: "enter name for excercise",
    },

    duration:{
        type: Number,
        required: " enter duration for exercise"
    },

    weight:{
        type: Number,
        required: " enter weight for exercise",
    },
})

const Exercise = mongoose.model('Exercise', ExerciseSchema)

module.exports = Exercise;