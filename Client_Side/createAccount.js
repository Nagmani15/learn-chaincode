 angular.module('createAccountAPP',[]).controller('accountController',function($scope,$http,$window){	    
	$scope.createAccount = function(){
		//$window.location.href = 'home.html';
		var accountId=$scope.accountId;
		var accountName=$scope.accountName;
		var timestamp=new Date();
		//var hashcode='1111';
		//var url='checkBalance.html?hashkey='+hashcode;
		//	$window.location.href = url;
		var dataObj = {
			"jsonrpc": "2.0",
			"method": "invoke",
			"params": {
				"type": 1,
				"chaincodeID": {
					"path":  $scope.chaincodeId
				},
				"ctorMsg": {
					"function": "createAccount",
					"args": [
						$scope.accountId,$scope.accountName,$scope.timestamp
					]
				},
				"secureContext": "user_type1_0"
			},
			"id": 0
		};
		alert(dataObj);	 
		var res = $http.post('https://597b2346e73641e894bad9d96ccb3031-vp0.us.blockchain.ibm.com:5004/chaincode', dataObj);
		res.success(function(data, status, headers, config) {					
			var url='createAccountSuccess.html';
		$window.location.href = url;
		});
		res.error(function(data, status, headers, config) {
			alert( "failure message: " + JSON.stringify(data));
			$window.location.href = 'createAccountFailure.html';
		});
		
		
	}
});