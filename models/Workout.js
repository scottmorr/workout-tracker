const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },

    exercises: {
        type: String,
        name: String,
        trim: true,
        duration: Number,
        weight: Number,
        reps: Number,
        sets: Number,
        distance: Number,

    }
})

WorkoutSchema.methods.coolifier = function() {
    this.day = `${this.day}...wokout completed!`;
    return this.day;
};

WorkoutSchema.methods.coolifier = function () {
    this.exercises = `${this.exercies}...are all done`;
    return this.exercises;
}

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;


