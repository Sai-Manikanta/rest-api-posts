const posts = require('./../posts');
const Post = require('./../models/postModel');

exports.getPosts = async (req, res) => {
    try {
        const posts = await Post.find();

        res.status(200).json({
            status: 'success',
            data: {
                count: posts.length,
                posts
            }
        })
    } catch(err) {
        res.status(404).send({
            status: 'fail',
            message: err
        })
    }
    res.json(posts);
}

exports.createPost = async (req, res) => {
    try {
        const newPost = await Post.create({ 
            title: req.body.title,
            body: req.body.body
        });

        res.status(201).json({
            status: 'success',
            data: {
                post: newPost
            }
        })
    } catch(err) {
        res.status(400).json({
            status: 'fail',
            message: err
        })
    }
}

exports.getPost = async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);

        res.status(200).json({
            status: 'success',
            data: {
                post
            }
        })
    } catch(err) {
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}

exports.updatePost = async (req, res) => {
    try {
        const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
            new: true
        });

        res.status(200).json({
            status: 'success',
            data: {
                post: updatedPost
            }
        })
    } catch(err) {
        res.status(404).json({
            success: 'fail',
            message: err
        })
    }
}

exports.deletePost = async (req, res) => {
    try {
        await Post.findByIdAndDelete(req.params.id);

        res.status(204).json({
            status: 'success',
            data: null
        })
    } catch(err){
        res.status(404).json({
            status: 'fail',
            message: err
        })
    }
}