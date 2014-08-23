angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('NewCtrl', function($scope, $stateParams, Tweepons, Contacts) {
  //
  // $scope.user = JSON.parse(window.localStorage['user']);
  // alert($scope.user.name);
  $scope.tweepons = Tweepons.all();
  $scope.contacts = Contacts.all();
  if ($stateParams.tweeponId) {
  	$scope.tweepon = Tweepons.get($stateParams.tweeponId);
  }
  	if($stateParams.contactId) {
  		$scope.contact = Contacts.get($stateParams.contactId);
	}

	$scope.tweet = function() {
		var id = $stateParams.tweeponId;
		var tweet = {
			status: "#Tweepon!: " + $scope.tweepons[id].name,

		};
		console.log(tweet);
	}
})

.controller('NewTweeponCtrl', function($scope, $stateParams, Tweepons) {
  $scope.tweepon = Tweepons.get($stateParams.tweeponId);
})
.controller('NewContactCtrl', function($scope, $stateParams, Contacts) {
  $scope.contact = Contacts.get($stateParams.contactId);
})

.controller('AccountCtrl', function($scope) {
})

;
