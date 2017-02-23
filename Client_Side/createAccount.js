 angular.module('createAccountAPP',[]).controller('accountController',function($scope,$http,$window){	    
	$scope.createAccount = function(){
		//$window.location.href = 'home.html';
	var initialAmount=$scope.amount;
	var accountName=$scope.accountName;
	var timestamp=new Date();
	//var hashcode='1111';
	var url='checkBalance.html?hashkey='+hashcode;
		$window.location.href = url;
	var dataObj = {
	    "jsonrpc": "2.0",
	    "method": "deploy",
	    "params": {
	        "type": 1,
	        "chaincodeID": {
	            "name":  ' https://github.com/Nagmani15/learn-chaincode/start'
	        },
	        "ctorMsg": {
	            "function": "init",
	            "args": [
	                initialAmount,accountName,timestamp
	            ]
	        },
	        "secureContext": "user_type1_xxxxxxxxx"
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
			//hashcode=data.result.message;
			hashcode='1111111';
		});
		res.error(function(data, status, headers, config) {
			alert( "failure message: " + JSON.stringify(data));
		});
		hashcode='1111111';
		var url='checkBalance.html?hashkey='+hashcode;
		$window.location.href = url;
		}
});