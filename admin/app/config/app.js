
(function(){

	angular.module('clusterMgmtApp', [
		// 'app.localdev.config',
		'ui.router'
	])

	.config(function ($stateProvider, $urlRouterProvider, $httpProvider) {

		$urlRouterProvider
	    .when('', '/dashboard')

      $stateProvider
          .state('dashboard', {
        url: '/dashboard',
              views: {
                '@': {
                  templateUrl: 'app/layout/dashboard.html'
                },
                'header@dashboard' : {
                  templateUrl: 'app/layout/header.html'
                },
                'content@dashboard' : {
                  templateUrl: 'app/layout/content_home.html'
                },
                'sidebar@dashboard' : {
                  templateUrl: 'app/layout/sidebar.html'
                },
                'footer@dashboard' : {
                  templateUrl: 'app/layout/footer.html'
                }
              },
            });
	
	})
	.run(function ($rootScope, $state, $location) {
		//console.log($location);

		$rootScope.$on('$viewContentLoaded', function(event){

	    });
		$rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {

      	});
	});
})();
