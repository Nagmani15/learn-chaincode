 angular.module('sendMoneyAPP',[]).controller('sendMoneyController',function($scope,$http,$window){	    
	$scope.sendAmount = function(){
		//$window.location.href = 'home.html';
		//var hashcode='1111';
		//var url='checkBalance.html?hashkey='+hashcode;
		//	$window.location.href = url;
		var dataObj = {
			"jsonrpc": "2.0",
			"method": "invoke",
			"params": {
				"type": 1,
				"chaincodeID": {
					"path":  "http://gopkg.in/prashkale/learn-chaincode.v2/start"
				},
				"ctorMsg": {
					"function": "sendMoney",
					"args": [
						$scope.recipientId,$scope.senderAccountId,$scope.recipientId,$scope.transferAmt
					]
				},
				"secureContext": "user_type1_0"
			},
			"id": 0
		};
		alert(dataObj);	 
		var res = $http.post('https://597b2346e73641e894bad9d96ccb3031-vp0.us.blockchain.ibm.com:5004/chaincode', dataObj);
		res.success(function(data, status, headers, config) {			
			hashcode=data.result.message;
			alert( "chaincode: " + hashcode);
			var url='checkBalance.html?hashkey='+hashcode;
		$window.location.href = url;
		});
		res.error(function(data, status, headers, config) {
			alert( "failure message: " + JSON.stringify(data));
		});
		
		
	}
});