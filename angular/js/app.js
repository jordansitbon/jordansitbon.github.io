angular.module('app', [
	'ui.bootstrap',
	'ui.router',
	
	'ngSvg'
])

.constant('TPL_DIR', './angular/html/')
.constant('SVG_PATH', './lib/ngSvg/demo/svg/')

.run(function($state, $rootScope, TPL_DIR) {
	$rootScope.tpl_dir = TPL_DIR;
	$state.go("app.svg");
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
	})

	.state("app.svg", {
		url: "ng-svg",
		views: {
			"content": {
				templateUrl: tpl_dir+"svg.html",
				controller: "SvgCtrl"
			}
		}
	});
})

.controller('AppCtrl', function($scope, $state) {
	$scope.app_name = 'Jordan Sitbon';
	
	$scope.$on('$stateChangeSuccess', function(event, to) {
		console.log(to);
		$scope.current_state = to.name;
	});
})

.controller('HomeCtrl', function($scope) {
	
})

.controller('SvgCtrl', function($scope) {
	$scope.svg_list = [
		{
			'file': 'dragon',
			'formScope': {
				'width': {'label': 'Taille'},
				'color_1': {'label': 'Couleur 1',},
				'color_2': {'label': 'Couleur 2'}
			},
			'scope': {
				'width': 200,
				'color_1': '#000000',
				'color_2': '#ff0000'
			}
		},
		{
			'file': 'candy',
			'formScope': {
				'width': {'label': 'Taille'},
				'color_1': {'label': 'Couleur 1',},
				'color_2': {'label': 'Couleur 2'},
				'show': {'label': 'Condition (0/1)'}
			},
			'scope': {
				'width': 200,
				'color_1': '#0b0',
				'color_2': '#fcf',
				'show': 1
			}
		},
		{
			'file': 'flower',
			'formScope': {
				'width': {'label': 'Taille'},
				'color_1': {'label': 'Couleur 1',},
				'color_2': {'label': 'Couleur 2',},
				'color_3': {'label': 'Couleur 3',},
				'color_4': {'label': 'Couleur 4',},
				'color_5': {'label': 'Couleur 5'},
				'color_6': {'label': 'Couleur 6'}
			},
			'scope': {
				'width': 300,
				'color_1': '#FF5A6A',
				'color_2': '#FF5A6A',
				'color_3': '#D40300',
				'color_4': '#FE8095',
				'color_5': '#00BB00',
				'color_6': '#FE8095'
			}
		}
	];
	
	$scope.svg_select = $scope.svg_list[0];
});