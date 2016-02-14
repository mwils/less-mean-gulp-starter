// appRoutes.js
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

	$routeProvider

		// home page
		.when('/', {
			templateUrl: 'views/home.html',
			controller: 'MainCtrl'
		})

		.when('/profile/:id', {
			templateUrl: 'views/profile.html',
			controller: 'ProfileCtrl'
		});

	$locationProvider.html5Mode(true);

}]);