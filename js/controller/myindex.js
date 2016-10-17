app.controller("mycontroll",["$scope",function($scope){
    
   $scope.message="hello world";
    
   $scope.postdata=function(){
       alert($scope.name);
   }    
}]);