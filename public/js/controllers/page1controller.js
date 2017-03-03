var page1 = angular.module('page1controller', ['ngRoute']);
page1.controller('page1controller',['$scope','$rootScope','$http','$location', function($scope,$rootScope,$http,$location) {
$scope.Submit1 = function() {

		if(!$rootScope.account){
			alert("Please Submit your details completely");
		}
		else if(!$rootScope.account.username1){
			alert("Please Enter valid frist Name ");
		}
		else if(!$rootScope.account.email){
			alert("Please Enter valid email ID");
		}else if(!$scope.account.phoneno1){
			alert("Please Enter valid phone number1");
		}
		else if(!$rootScope.account.phoneno2){
			alert("Please Enter valid phone number2");
		}
		else if(!$rootScope.account.phoneno3){
			alert("Please Enter valid phone number3");
		}
		else if(!$rootScope.account.zipcode){
			alert("Please Enter valid zipcode");
		}
		else if(!$rootScope.account.checkAgree){
			alert("Agree terms and conditions");
		}
		else{
			console.log("user data is saved");
			$location.path('/page2');
			console.log($rootScope.account);

		}
            };

      }]);