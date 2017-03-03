var page2 = angular.module("page2app",[]);
page2.controller("page2controller" ,['$scope','$rootScope','$http','$location', function($scope, $rootScope, $http, $location){
		 $rootScope.Submit2 = function() {
		if(!$rootScope.account){
			alert("Please Submit your details completely");
		}
		else if(!$rootScope.account.firstName){
			alert("Please Enter valid Name [A-Z]");
		}
		else if(!$rootScope.account.lastName){
			alert("Please Enter valid Name [A-Z]");
		}else if(!$rootScope.account.currentAddress){
			alert("Please Enter valid Address1");
		}
		else if(!$rootScope.account.currentAddress2){
			alert("Please Enter valid Address ");
		}
		else if(!$rootScope.account.city){
			alert("Please Enter valid city ");
		}
		else if(!$rootScope.account.State){
			alert("Please Enter valid State ");
		}
		else if(!$rootScope.account.ZIP){
			alert("Please Enter valid ZIP ");
		}
		else if(!$rootScope.account.Phone){
			alert("Please Enter valid Number ");
		}
		else if(!$rootScope.account.Email){
			alert("Please Enter valid Email ");
		}

		else{
					console.log($rootScope.account);
			console.log("input data hs been saved");
			$location.path('/page3');
		}
	};
	
}]);