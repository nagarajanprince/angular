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
        
         listservice.data($scope.datalist[a].id-1).then(function(res){
             $scope.servicedata = res.data; 
             console.log(res.data.body)
                    
        });
    };

     
      
});

app.controller("contentchanges",function($scope,$http){
    $scope.formsubmit=function(){
       
    $http.post("http://jsonplaceholder.typicode.com/posts",$scope.user).then(function(res){
        console.log(res.data+"::"+res.status);
    },function(res){ console.log(res.data+"::"+res.status);});
    };    
});


var app = angular.module("subapp",[]);

angular.bootstrap(document.getElementById("appid2"),["subapp"]);

/* Creating a resource */

/* Updating a resource */

/* Deleting a resource */

/* Filtering resources */

/* Nested resources */