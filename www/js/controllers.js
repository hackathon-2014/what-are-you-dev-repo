angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('NewCtrl', function($scope, $stateParams, Tweepons, Contacts) {
  //
  $scope.tweepons = Tweepons.all();
  $scope.contacts = Contacts.all();
  if ($stateParams.tweeponId) {
  	$scope.tweepon = Tweepons.get($stateParams.tweeponId);
  }
  if($stateParams.contactId) {
  	$scope.contact = Contacts.get($stateParams.contactId);
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
