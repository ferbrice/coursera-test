(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope', '$filter'];
function LunchCheckController($scope, $filter) {
  $scope.message = "";

  $scope.checkLunch = function () {
    $scope.message = "Trabajando aún";
  };
}

})();
