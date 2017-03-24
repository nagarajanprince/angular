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
    this.data = function(item){       
        return $http.get("http://jsonplaceholder.typicode.com/posts/"+item);        
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

    $scope.showdata = function(a){
        
         listservice.data($scope.datalist[a].id).then(function(res){
             $scope.servicedata = res.data; 
             console.log(res.data.body)
                    
        });
    };

     
      
});

/* Creating a resource */

/* Updating a resource */

/* Deleting a resource */

/* Filtering resources */

/* Nested resources */