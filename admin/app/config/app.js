
(function(){

	angular.module('clusterMgmtApp', [
		// 'app.localdev.config',
		'ui.router'
	])

	.config(function ($stateProvider, $urlRouterProvider) {

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
            })

						.state('dashboard.manage_club', {
				        url: '/manage-club',
								views: {
									'content@dashboard' : {
				        		templateUrl: 'app/layout/content_manage_club.html'
									}
								},
				    })

						.state('dashboard.manage_members', {
				        url: '/manage-members',
								views: {
									'content@dashboard' : {
				        		templateUrl: 'app/layout/content_manage_members.html'
									}
								},
				    })

						.state('dashboard.tile_cat', {
				        url: '/manage-tile-categories',
								views: {
									'content@dashboard' : {
				        		templateUrl: 'app/layout/content_tile_cat.html'
									}
								},
				    })

						.state('dashboard.tile_man', {
								url: '/manage-tile',
								views: {
									'content@dashboard' : {
										templateUrl: 'app/layout/content_tile_man.html'
									}
								},
						})

	})
	.run(function ($rootScope, $state, $location) {
		//console.log($location);

		$rootScope.$on('$viewContentLoaded', function(event){

	    });
		$rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {

      	});
	});
})();
