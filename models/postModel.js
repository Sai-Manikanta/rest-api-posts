const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'title is required']
    },
    body: {
        type: String,
        require: [true, 'body is required']
    }
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post