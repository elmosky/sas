// js/controllers/main.js

var controller = angular.module('test_postController', []);

	controller.controller('mainController', function($scope,$http,test_post) {

		 $scope.formData = {};

	    // when landing on the page, get all test_post and show them
	    $http.get('/api/test_post')
	        .success(function(data) {
	            $scope.test_post = data;
	            console.log(data);
	        })
	        .error(function(data) {
	            console.log('Error: ' + data);
	        });

	    // when submitting the add form, send the text to the node API
	    $scope.createblog_post = function() {
	        $http.post('/api/test_post', $scope.formData)
	            .success(function(data) {
	                $scope.formData = {}; // clear the form so our user is ready to enter another
	                $scope.test_post = data;
	                console.log(data);
	            })
	            .error(function(data) {
	                console.log('Error: ' + data);
	            });
	    };

	    // delete a blog_post after checking it
	    $scope.deleteblog_post = function(id) {
	        $http.delete('/api/test_post/' + id)
	            .success(function(data) {
	                $scope.test_post = data;
	                console.log(data);
	            })
	            .error(function(data) {
	                console.log('Error: ' + data);
	            });
	    };

	    // test hello world function
	    $scope.helloWorld = function () {
	    	console.log("Sup. This is the hello world controller function"); 
	    };

	});
