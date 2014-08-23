angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('NewCtrl', function($scope, Tweepons) {
  //
  $scope.tweepons = Tweepons.all();
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

.controller('AccountCtrl', function($scope) {
});
