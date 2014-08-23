angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
})

.controller('AuthCtrl', function($scope) {
	$scope.doLogin = function() {
		OAuth.popup('twitter')
		.done(function(result) {
			console.log('hello');
			alert(JSON.stringify(result));
		})
	}
});
