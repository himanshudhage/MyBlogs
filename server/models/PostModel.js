const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: String,
    description: String,
    file: String,
    email: String,
    username: String,
    likes: {
        type: Number,
        default: 0
    },
    comments: [
        {
            user: String,
            text: String,
            timestamp: String
        }
    ]
}, { timestamps: true });

module.exports = mongoose.model('Post', PostSchema);
