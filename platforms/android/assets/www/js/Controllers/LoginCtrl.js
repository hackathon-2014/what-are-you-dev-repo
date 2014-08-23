angular.module('starter.controllers')

.controller('LoginCtrl', function($scope, $window) {
	$scope.tryLogin = function() {
		OAuth.popup('twitter')
		.done(function(result) {
			result.me()
			.done(function(response) {
				console.log(response);
				$scope.$emit('Login', response);
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