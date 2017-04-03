var app = angular.module("mainapp",['ngCookies']);

/* $anchorScroll */
app.controller("scrollcontroller",['$scope', '$location', '$anchorScroll','$window',function($scope,$location,$anchorScroll,$window){
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
    $scope.writecookie=function(item){
        //$cookieStore.put(item,item);
        $cookieStore.put("dataitem","welcome");
    };
    $scope.redcookie=function(item){
        if(item != undefined){
           // console.log($cookieStore.get(item));
            //$scope.cookiedata=$cookieStore.get(item);
             console.log($cookieStore.get(dataitem));
        }else{
            
        }        
    };
    $scope.removecookie=function(item){
        $cookieStore.remove(item)
    };
});