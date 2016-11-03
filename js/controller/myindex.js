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
		value: "#f00",
        batter:[
            {
                id:"1",
                name:"Data1"
            },
            {
                id:"2",
                name:"Data2"
            },
            {
                id:"3",
                name:"Data3"
            },
            {
                id:"4",
                name:"Data4"
            }
        ]
	},
	{
		color: "green",
		value: "#0f0",
          batter:[
            {
                id:"1",
                name:"Sample1"
            },
            {
                id:"2",
                name:"Sample2"
            },
            {
                id:"3",
                name:"Sample3"
            },
            {
                id:"4",
                name:"Sample4"
            }
        ]
	},
	{
		color: "blue",
		value: "#00f",
          batter:[
            {
                id:"1",
                name:"Example1"
            },
            {
                id:"2",
                name:"Example2"
            },
            {
                id:"3",
                name:"Example3"
            },
            {
                id:"4",
                name:"Example4"
            }
        ]
	},
	{
		color: "cyan",
		value: "#0ff",
          batter:[
            {
                id:"1",
                name:"View1"
            },
            {
                id:"2",
                name:"View2"
            },
            {
                id:"3",
                name:"View3"
            },
            {
                id:"4",
                name:"View4"
            }
        ]
	}	
];
    
    $scope.cart=[];
    
    $scope.listData=function(index){        
       $scope.cart.push($scope.tempdata[index]);
        $scope.tempdata[index].disable=true;    
    };
    
    $scope.removeData=function(index){
        
        $scope.cart[index].disable=false;
        $scope.cart.splice(index,1);
        
    };   
    
    
    $scope.totalData=function(){
        var total=0;
        angular.forEach($scope.cart,function(value){
            total=total+value.color;
        });
                        return total;
    }
    
}]);