 angular.module('showAccountDetailsApp',[]).controller('showAccountDetailsController',function($scope,$http,$window){	    
	
		//$window.location.href = 'home.html';
		var url=$window.location.href.split("=");
	    var chaincodeId = url[1];
		var accountId = url[2];
		
		//var hashcode='1111';
		//var url='checkBalance.html?hashkey='+hashcode;
		//	$window.location.href = url;
		var dataObj = {
			"jsonrpc": "2.0",
			"method": "query",
			"params": {
				"type": 1,
				"chaincodeID": {
					"path": chaincodeId
				},
				"ctorMsg": {
					"function": "fetchAccountDetails",
					"args": [
						accountId
					]
				},
				"secureContext": "user_type1_0"
			},
			"id": 0
		};
		alert(dataObj);	 
		var res = $http.post('https://597b2346e73641e894bad9d96ccb3031-vp0.us.blockchain.ibm.com:5004/chaincode', dataObj);
		res.success(function(data, status, headers, config) {					
			$scope.balance=data.result.message.balance;
			$scope.accountId=accountId;
			$scope.chaincodeId=chaincodeId;
		});
		res.error(function(data, status, headers, config) {
			alert( "failure message: " + JSON.stringify(data));
			
		});
		$scope.transferMoney = function(){
		$window.location.href = 'sendMoney.html?chaincodeId='+$scope.chaincodeId+'&accountId='+$scope.accountId;
	
		}
		
	
});