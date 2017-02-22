 angular.module('loginAPP',[]).controller('loginController',function($scope,$http,$window){	    
	$scope.authenticate = function(){
		$window.location.href = 'home.html';
	/* var dataObj = {
  "enrollId": "user_type1_0",
  "enrollSecret": "a5cdc39ecd"
};
		 $http.defaults.useXDomain = true;
	   var res = $http.post('http://98566dc562784be68bb18aac6b11a71e-vp3.us.blockchain.ibm.com:5001', dataObj, {
                    headers: {
                        'Content-Type': 'application/json',
						'Access-Control-Allow-Origin': '*.*',
						 'Accept': 'application/json',
						 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
                    }
                });
		res.success(function(data, status, headers, config) {
			alert( "failure message1: " + JSON.stringify({data: data}));
		});
		res.error(function(data, status, headers, config) {
			alert( "failure message: " + JSON.stringify(data));
		});*/
		}
}); 

