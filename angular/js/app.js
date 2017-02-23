angular.module('app', [
	'ui.bootstrap',
	'ui.router'
])

.constant('TPL_DIR', './angular/html/')

.run(function($state, $rootScope, TPL_DIR) {
	$rootScope.tpl_dir = TPL_DIR;
	$state.go("app.home");
})

.config(function($stateProvider, $urlRouterProvider, TPL_DIR) {
	var tpl_dir = TPL_DIR;
	
	$stateProvider
	
	.state("app", {
		url: "",
		abstract: true,
		views: {
			"full-page": {
				templateUrl: tpl_dir+"app.html",
				controller: "AppCtrl"
			}
		}
	})

	.state("app.home", {
		url: "",
		views: {
			"content": {
				templateUrl: tpl_dir+"home.html",
				controller: "HomeCtrl"
			}
		}
	});
})

.controller('AppCtrl', function($scope) {
	$scope.test = 'TeSt';
})

.controller('HomeCtrl', function($scope) {
	
});