// API - http://jsonplaceholder.typicode.com/posts


var app = angular.module("mainapp",[]);

app.factory("listresource",function($http){
    var data = {};
    
    data.getdata = function(){
        return $http.get("http://jsonplaceholder.typicode.com/posts");
    };
        
    return data;
    
});


$scope.showdata = function(a){
    console.log(a);  
};            
/* Showing a resource */



/* Listing resources */

app.controller("maincontroller",function($scope,$http,listresource){
   /* $http.get("http://jsonplaceholder.typicode.com/posts").then(function(res){
        $scope.datalist = res.data;
    });*/
    
    
    
    
    listresource.getdata().then(function(res){
         $scope.datalist = res.data; 
        
        
    });
    
      
});

/* Creating a resource */

/* Updating a resource */

/* Deleting a resource */

/* Filtering resources */

/* Nested resources */