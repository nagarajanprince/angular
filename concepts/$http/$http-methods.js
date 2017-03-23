// API - http://jsonplaceholder.typicode.com/posts


var app = angular.module("mainapp",[]);

/* factory with $http */

app.factory("listresource",function($http){
    var data = {};
    
    data.getdata = function(){
        return $http.get("http://jsonplaceholder.typicode.com/posts");
    };
        
    return data;
    
});

/* service with $http */
    
app.service("listservice",function($http){
    this.data = function(){
        return $http.get("http://jsonplaceholder.typicode.com/posts");
    }
});    

/* Showing a resource */



/* Listing resources */

app.controller("maincontroller",function($scope,$http,listresource,listservice){
    /* factory access */
    listresource.getdata().then(function(res){
         $scope.datalist = res.data; 
    });

    /* service access */

    listservice.data().then(function(res){
         $scope.servicedata = res.data; 
    });



$scope.showdata = function(a){
    console.log($scope.datalist[a].body);
};  
    
      
});

/* Creating a resource */

/* Updating a resource */

/* Deleting a resource */

/* Filtering resources */

/* Nested resources */