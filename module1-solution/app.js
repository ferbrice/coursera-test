(function () {
  'use strict';

  angular.module('LunchCheck', [])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope','$filter'];

  function LunchCheckController($scope,$filter) {
    $scope.message = "";
    $scope.listMenu = ""; 
	$scope.listMenuItems=[];
    $scope.checkLunch = function () {
      $scope.listMenuItems = $scope.listMenu.split(",");
      $scope.listMenu.length==0 ? 
		$scope.message="Please enter data first":
		$scope.listMenuItems.length>3 ?
			$scope.message="Too much!":
			$scope.message="Enjoy!";
	};
  };
})();
