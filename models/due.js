const mongoose = require('mongoose');

// Create a new schema object with the name of the due.
const due = new mongoose.Schema({
    fee_head: {
        type: mongoose.Schema.Types.ObjectId,ref: 'fee_head',
        required: true
    },
    student:{
        type: mongoose.Schema.Types.ObjectId,ref: 'student',
        required: true
    },
    due_date:{
        type: Date,
        required: true
    }
},{timestamps: true})


const Due = mongoose.model('due', due);

module.exports = Due;