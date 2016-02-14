// app.js
angular.module('worklyApp', ['ngRoute', 'appRoutes', 'mainCtrl', 'profileCtrl', 'profileService']);

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
angular.module('mainCtrl', []).controller('MainCtrl', function($scope) {

	$scope.tagline = 'To the moon and back!';	

});
angular.module('profileCtrl', [])
.controller('ProfileCtrl', function($scope) {

	$scope.tagline = 'The square root of life is pi!';	

});
// ProfileService.js
angular.module('profileService', []).factory('Profile', ['$http', function($http) {

}]);