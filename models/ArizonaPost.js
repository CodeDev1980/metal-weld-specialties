const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArizonaPostSchema = new Schema ({
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

const ArizonaPost = mongoose.model('ArizonaPost', ArizonaPostSchema)
module.exports = ArizonaPost