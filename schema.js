const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
    title: {
        type: String,
        required: true, // We don't want a post without a title
    },
    author: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
        default: "all",
    },
    date: {
        type: String,
        required: true,
        default: new Date( ).toDateString( )
    },
    image: {
        type: String,
        required: false,
    },
    text: {
        type: String,
        required: false,
    }
});

var model = mongoose.model("posts", postSchema); // "posts" will be the name of the collection within the database
module.exports = model;

