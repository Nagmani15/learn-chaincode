 angular.module('welcomeApp',[]).controller('welcomeController',function($scope,$http,$window){	    
	$scope.account = function(){
		$window.location.href = 'createAccount.html';
		}
}); 