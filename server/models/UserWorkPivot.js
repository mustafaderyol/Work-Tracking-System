const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserWorkPivotSchema = new Schema({
    userId: Schema.Types.ObjectId,
    workId: Schema.Types.ObjectId,
    viewed: {
        type: Boolean,
        default: false
    },
    viewDate: Date,
    startDate: Date,
    endDate: Date
});

module.exports = mongoose.model('userWorkPivot', UserWorkPivotSchema);