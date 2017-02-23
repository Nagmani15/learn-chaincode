angular.module('transferAPP',[]).controller('transferController',function($scope,$http,$window)
	{
	
	var url=$window.location.href.split("=");
	var hashcode = url[1];
	var deductAmount=$scope.deductAmount;
	alert("hashcode::"+hashcode);
	var dataObj = {
	    "jsonrpc": "2.0",
	    "method": "query",
	    "params": {
	        "type": 1,
	        "chaincodeID": {
	            "name":  $scope.hashcode
	        },
	        "ctorMsg": {
	            "function": "checkBalance",
	            "args": [
	                deductAmount
	            ]
	        },
	        "secureContext": "user_type1_0"
	    },
	    "id": 1
	};
		 
	   var res = $http.post('https://b15a7be22cf84b31b4bd89ee52666d02-vp0.us.blockchain.ibm.com:5004/chaincode', dataObj, {
                    headers: {
                        'Content-Type': 'application/json',
						'Access-Control-Allow-Origin': '*.*',
						 'Accept': 'application/json',
						 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
                    }
                });
		res.success(function(data, status, headers, config) {
			alert( "success message: " + JSON.stringify({data: data}));
			$scope.ammount = data.result.message;
		
		});
		res.error(function(data, status, headers, config) {
			alert( "failure message: " + JSON.stringify(data));
		});
		
	$scope.transferAmount = function(){
	var deductAmount=$scope.deductAmount;
	var dataObj = {
	    "jsonrpc": "2.0",
	    "method": "invoke",
	    "params": {
	        "type": 1,
	        "chaincodeID": {
	            "name": $scope.hashcode
	        },
	        "ctorMsg": {
	            "function": "sendMoney",
	            "args": [
	                deductAmount
	            ]
	        },
	        "secureContext": "user_type1_0"
	    },
	    "id":1
	};
	var res = $http.post('https://b15a7be22cf84b31b4bd89ee52666d02-vp0.us.blockchain.ibm.com:5004/chaincode', dataObj, {
                    headers: {
                        'Content-Type': 'application/json',
						'Access-Control-Allow-Origin': '*.*',
						 'Accept': 'application/json',
						 'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
                    }
                });
		res.success(function(data, status, headers, config) {
			alert( "success message1: " + JSON.stringify({data: data}));
			//$scope.ammount = data.result.message;
		
		});
		res.error(function(data, status, headers, config) {
			alert( "failure message: " + JSON.stringify(data));
		});
	}
		
	});
