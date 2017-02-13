var app=angular.module('ex1',[]);

app.controller("myfactory",function($scope,$interval,myfactory){
    	$scope.data=myfactory.printdata();
    /*
    $scope.timer=null;    
    $scope.timer=$interval(function(){
        $scope.data="Welcome to world";
    },5000); 
    */
});

app.factory("myfactory",function(){
	var datalist={};

	datalist.printdata = function(){
		return "Hello World"
	}
	return datalist;
});


app.controller("myservice",function($scope,myservice){
	$scope.content=myservice.content();
});

app.service("myservice",function(){
	
	this.content = function(){
		return "This is myservice!";
	}

});