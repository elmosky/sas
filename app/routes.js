// routes ======================================================================
    //load the test_post model
    var test_post = require('./models/test_post')
    // api ---------------------------------------------------------------------
    // get all test_post

    module.exports = function (app) {
        
        app.get('/api/test_post', function(req, res) {

        // use mongoose to get all test_post in the database
        test_post.find(function(err, test_post) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(test_post); // return all test_post in JSON format
        });
    });

    // create test_post and send back all test_post after creation
    app.post('/api/test_post', function(req, res) {

        // create a test_post, information comes from AJAX request from Angular
        test_post.create({
            text : req.body.text,
            done : false
        }, function(err, test_post) {
            if (err)
                res.send(err);

            // get and return all the test_post after you create another
            test_post.find(function(err, test_post) {
                if (err)
                    res.send(err)
                res.json(test_post);
            });
        });

    });

    // delete a test_post
    app.delete('/api/test_post/:test_post_id', function(req, res) {
        test_post.remove({
            _id : req.params.test_post_id
        }, function(err, test_post) {
            if (err)
                res.send(err);

            // get and return all the test_post after you create another
            test_post.find(function(err, test_post) {
                if (err)
                    res.send(err)
                res.json(test_post);
            });
        });
    });

     // application -------------------------------------------------------------
    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
    }); 

    }
