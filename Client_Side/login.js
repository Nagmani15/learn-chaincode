angular.module('loginAPP',[]).controller('loginController',function($scope,$http,$window){
 
	$scope.authenticate = function(){
		$window.location.href = 'showAccountDetails.html?chaincodeId='+$scope.chaincodeId+'&accountId='+$scope.accountId;
	
		}
}); 

