angular.module('home',[]).controller('homeApp',function($scope)
	{
	
	var dataObj = {
	    "jsonrpc": "2.0",
	    "method": "query",
	    "params": {
	        "type": 1,
	        "chaincodeID": {
	            "name":  https://github.com/Nagmani15/learn-chaincode.git
	        },
	        "ctorMsg": {
	            "function": "getLatest_SenderAmount",
	            "args": [
	                ''
	            ]
	        },
	        "secureContext": "<caller>"
	    },
	    "id": 1
	};
		 
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
			$scope.ammount = data;
		
		});
		res.error(function(data, status, headers, config) {
			alert( "failure message: " + JSON.stringify(data));
		});
		$scope.transferMoney = function(){
		}
		}
	
		
	});
