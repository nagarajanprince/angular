var app = angular.module("mainapp",['ngCookies']);

/* $anchorScroll */
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

app.controller("cookiecontroller",function($scope,$cookies,$cookieStore){
    $scope.writecookie=function(){
    		$cookies.put("dataitem","welcome $cookies");
    };
    $scope.redcookie=function(){
    	console.log($cookies.get(dataitem));
    };
    $scope.removecookie=function(){
    	$cookies.remove("dataitem");
    };
});