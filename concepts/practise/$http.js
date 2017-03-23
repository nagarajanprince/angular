var app=angular.module("mainapp",[]);
app.controller("maincontroller",function($scope,$http){
	$http.get("https://reqres.in/api/users").then(function(res){
		$scope.datalist=res;
		$scope.livelist1=res.data;		
	});

});