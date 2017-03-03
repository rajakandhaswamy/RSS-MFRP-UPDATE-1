var page3 = angular.module("page3app",['page1controller','page2app']);

page3.controller("page3controller" , ['$scope','$rootScope','$http','$location', function($scope, $rootScope, $http, $location){
$rootScope.createaccount = function() {
		if(!$rootScope.account){
			alert("Please Submit your details completely");
		}
		else if(!$rootScope.account.userName){
			alert("Please Enter valid Name [A-Z]");
		}
		else if(!$rootScope.account.password){
			alert("Please Enter valid Password");
		}else if(!$rootScope.account.confirmPassword){
			alert("Please Enter valid Password");
		}
		else if($rootScope.account.password !== $rootScope.account.confirmPassword)
		{
			alert("Password did'nt match")
		}
		else if(!$rootScope.account.pin1){
			alert("Please Enter valid PIN ");
		}
		else if(!$rootScope.account.pin2){
			alert("Please Enter valid PIN");
		}
		else if($rootScope.account.pin1 !== $rootScope.account.pin2)
		{
			alert("PIN did'nt match")
		}
		else if(!$rootScope.account.question1){
			alert("Please Enter valid answer ");
		}
		else if(!$rootScope.account.question2){
			alert("Please Enter valid answer");
		}
		else if(!$rootScope.account.promo){
			alert("Please Enter valid Number ");
		}

		else{
			$http.post("/inputlist",$rootScope.account)
			.then(function(response) {
				console.log($rootScope.account)
			});
			console.log("account data hs been saved");
			$location.path('/page4');
		}
	};

	
}]);
