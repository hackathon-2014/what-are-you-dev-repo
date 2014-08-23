angular.module('starter.controllers')

.controller('LoginCtrl', function($scope, $window) {
	$scope.tryLogin = function() {
		OAuth.popup('twitter')
		.done(function(result) {
			alert('done 1');
			result.me()
			.done(function(response) {
				alert('done 2');
				//$scope.$emit('Login', response);
			})
			.fail(function(error) {
				alert('fail 2');
			});
		})
		.fail(function(error) {
			alert('fail 2');
		})
	}
});