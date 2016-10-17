app.directive('logo',function(){
    return{
        restrict:'EA',
        template: function(element,atribute){
            return '<img src="images/logo.png" width="'+atribute.size+'"/>';
        }
    }
    
});