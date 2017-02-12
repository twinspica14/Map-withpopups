
angular
	.module("StarterApp",["ngMaterial", 'ngMap', 'ui.router', 'firebase'])
	.config(function($mdThemingProvider, $stateProvider, $urlRouterProvider){
		$mdThemingProvider.theme('default')
			.primaryPalette('teal')
			.accentPalette('orange');

		$stateProvider
			
				
		

			.state('map', {
				url: '/map',
				templateUrl: 'components/classifieds/map.tpl.html'
				
				
			})

		

		$urlRouterProvider.otherwise('map');
	});