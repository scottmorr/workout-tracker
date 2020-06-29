const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now,
    },
    exercises: [
        {
            type: { type: String },
            name: { type: String },
            duration: { type: Number },
            weight: { type: Number },
            reps: { type: Number },
            sets: { type: Number },
            distance: { type: Number },
        }
    ]
}, {
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
})

WorkoutSchema.virtual('totalDuration').get(function () {
    // var total = this.exercises.reduce((total, exercise) => total += exercise.duration, 0);

    var total = 0;

    for (var i = 0; i < this.exercises.length; i++) {
        total += this.exercises[i].duration
    }

    return total;
})

const Workout = mongoose.model("Workout", WorkoutSchema);
module.exports = Workout;

