angular.module('starter.controllers')

.controller('LoginCtrl', function($scope, $window, $state) {

	$state.go('tab.new');
	$scope.tryLogin = function() {
		OAuth.popup('twitter')
		.done(function(result) {
			result.me()
			.done(function(response) {
				//alert('done');
				$scope.$emit('Login', response);
			})
			.fail(function(error) {
				alert(error.message);
			});
		})
		.fail(function(error) {
			alert(error.message);
		})
	}
});