 angular.module('sendMoneyAPP',[]).controller('sendMoneyController',function($scope,$http,$window){
     var url=$window.location.href.split("=");
	    $scope.chaincodeId = url[1];
		$scope.accountId = url[2];
	$scope.sendAmount=function(){
		var timestamp=new Date();
		var dataObj = {
			"jsonrpc": "2.0",
			"method": "invoke",
			"params": {
				"type": 1,
				"chaincodeID": {
					"path": $scope.chaincodeId
				},
				"ctorMsg": {
					"function": "sendMoney",
					"args": [
						$scope.senderAccountId,$scope.recipientAccountId,$scope.transferAmt,"+timestamp+"
					]
				},
				"secureContext": "user_type1_0"
			},
			"id": 0
		};
		alert(dataObj);	 
		var res = $http.post('https://597b2346e73641e894bad9d96ccb3031-vp0.us.blockchain.ibm.com:5004/chaincode', dataObj);
		res.success(function(data, status, headers, config) {					
			$window.location.href = 'sendMoneySuccess.html';
		});
		res.error(function(data, status, headers, config) {
			alert( "failure message: " + JSON.stringify(data));
			$window.location.href = 'sendMoneyFailure.html';
			
		});
		
		}
	
});