const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CaliforniaPostSchema = new Schema ({
    title: String,
    body: String,
    image: String,
    location: String,
    userid: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    datePosted: {
        type: Date,
        default: new Date
    }
})

const CaliforniaPost = mongoose.model('CaliforniaPost', CaliforniaPostSchema)
module.exports = CaliforniaPost