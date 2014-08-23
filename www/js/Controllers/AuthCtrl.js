angular.module('starter.controllers')

.controller('AuthCtrl', function($scope) {
	$scope.doLogin = function() {
		OAuth.popup('twitter')
		.done(function(result) {
			result.me()
			.done(function(response) {
				console.log(response.name);
			})
			.fail(function(error) {
				console.log(error)
			});
		})
		.fail(function(error) {
			console.log(error);
		})
	}
});