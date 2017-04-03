var app = angular.module("mainapp",['ngCookies']);

/* $anchorScroll */
app.controller("scrollcontroller",['$scope', '$location', '$anchorScroll',function($scope,$location,$anchorScroll){
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

app.controller("cookiecontroller",function($scope,$cookies,$cookieStore,$window){
    $scope.writecookie=function(item){
        $cookieStore.put(item,item);
    };
    $scope.redcookie=function(item){
        if($cookieStore.get(item) != undefined){
            console.log($cookieStore.get(item));
            $scope.cookiedata=$cookieStore.get(item);
        }else{
            $Window.alert(":: No Cookie");
        }
        
    };
    $scope.removecookie=function(item){
        $cookieStore.remove(item)
    };
});

app.controller("filtercontroller",function($scope,$filter){
    
        $scope.fltupperdata=$filter('uppercase')("The processing");
    $scope.fltamount = $filter("currency")("2000");
    
    $scope.$watch('fltupper',function(){
        $scope.fltupperdata=$filter('uppercase')($scope.fltupper);
       
    });   
    $scope.$watchGroup(['flteramt','fltlow'],function(){
       
        $scope.fltamount = $filter("currency")($scope.flteramt);
        $scope.fltlower = $filter("lowercase")($scope.fltlow);
    });
    
});

app.controller("windowcontroller",function($scope,$window,$document){
    
     $scope.callfunction=function(){
         $window.alert("This value alert by $window");
     };
    
});
app.controller("documentcontroller",function($scope,$document){
    
   $scope.title=$document[0].title;
   $scope.body=$document[0].body;
   $scope.cookieview=$document[0].cookie;
    
});

app.controller("locationcontroller",function($scope,$location){
    $scope.locabsurl = $location.absUrl();
    $scope.locprot = $location.protocol();
    
     $scope.host = $location.host();  
     $scope.port = $location.port();  
     $scope.path = $location.path();  
     $scope.searchObject = $location.search();  
     $scope.hash = $location.hash();  
});

app.controller("logcontroller",function($scope,$log){
   $log.log('Log Message.');  
$log.error('Log Error.');  
$log.info('Log Info.');  
$log.warn('Log Warning.');  
$log.debug('Log Debugging.');  
});