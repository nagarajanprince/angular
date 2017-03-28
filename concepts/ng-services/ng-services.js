var app = angular.module("mainapp",[]);
app.controller("scrollcontroller",['$scope', '$location', '$anchorScroll',function($scope,$location,$anchorScroll){
	$scope.dataitem = {
		'value':'scroll1',
		'value':'scroll2',
		'value':'scroll3',
		'value':'scroll4',
		'value':'scroll5',
		'value':'scroll6'
	}

	console.log("called" + $scope.dataitem);

}]);