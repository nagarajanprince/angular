var app = angular.module("mainapp",[]);
app.controller("scrollcontroller",['$scope', '$location', '$anchorScroll',function($scope,$location,$anchorScroll){
	$scope.dataitem = [
        {country:'Norway'},
        {country:'Sweden'},
        {country:'England'},
        {country:'Norway'},
        {country:'Denmark'},
        {country:'Sweden'},
        {country:'Denmark'},
        {country:'England'},
        {country:'Norway'}
        ];

	$scope.scrolled = function(value){
		$location.hash(value);
	};

}]);