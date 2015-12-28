// app/models/test_models.js

    // load mongoose since we need it to define a model
    var mongoose = require('mongoose');

    module.exports = mongoose.model('test_post', {
        text : String,
        done : Boolean
    });