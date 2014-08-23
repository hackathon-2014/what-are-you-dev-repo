angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('NewCtrl', function($scope, Tweepons, Contacts) {
  //
  $scope.tweepons = Tweepons.all();
  $scope.contacts = Contacts.all();
})
.controller('SentCtrl', function($scope) {
  //
})
.controller('ReceivedCtrl', function($scope) {
  //
})

.controller('NewTweeponCtrl', function($scope, $stateParams, Tweepons) {
  $scope.tweepon = Tweepons.get($stateParams.tweeponId);
})
.controller('NewContactCtrl', function($scope, $stateParams, Contacts) {
  $scope.contact = Contacts.get($stateParams.contactId);
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
