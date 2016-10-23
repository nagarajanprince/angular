app.controller("mycontroll",["$scope",function($scope){
    
   $scope.message="hello world";
    
   $scope.postdata=function(){
       alert($scope.name);
   }    
}]);

app.controller("listdata",["$scope",function($scope){
    $scope.tempdata=[
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	}
];
}])