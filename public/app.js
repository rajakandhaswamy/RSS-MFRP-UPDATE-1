
var app=angular.module("formValidation",['ngRoute','page1controller','page2app','page3app']);

app.constant('Routes', {
			route1: '/page2',
			route2: '/page3',
			route3: '/page4'
});
app.controller('appcontroller', function($scope, Routes, $http){
			$scope.pageContent = '';
			$scope.routes = Routes;
});

app.config(function($routeProvider, Routes){
				$routeProvider
				.when(Routes.route1, {
					templateUrl: 'partials/page2partial.html',
                    css: 'css/page2style.css',
                    controller:'page2controller'
				})
				.when(Routes.route2, {
					templateUrl: 'partials/page3partial.html',
                    css: 'css/page3style.css',
                    controller:'page3controller'
				})
				.when(Routes.route3, {
					templateUrl: 'partials/page4partial.html',
                    css: 'css/page4style.css',
				})
		.otherwise({
			templateUrl: 'partials/page1partial.html',
			controller:'page1controller',
			css: 'css/page1style.css'
		});
});


