//js/services/test_post.js
angular.module('test_postService', [])

	//super simple service
	//each function returns a blog_post object
	.factory('test_post', function($http){
		return {
			get : function() {
				return $http.get('/api/test_post');
			},
			create : function(formData) {
				return $http.post('/api/test_post', formData);
			},
			delete : function(id) {
				return $http.post('/api/test_post/' + id);
			}

		}
	});