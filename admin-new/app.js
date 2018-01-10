var app = angular.module("sportsPassApp",['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {

  $urlRouterProvider
    .when('', '/dashboard')

    $stateProvider
        .state('dashboard', {
      url: '/dashboard',
            views: {
              '@': {
                templateUrl: 'html/dashboard.html'
              },
              'header@dashboard' : {
                templateUrl: 'html/header.html'
              },
              'content@dashboard' : {
                templateUrl: 'html/content_home.html'
              },
              'sidebar@dashboard' : {
                templateUrl: 'html/sidebar.html',
                controller: 'sideBarCtrl'
              },
              'footer@dashboard' : {
                templateUrl: 'html/footer.html'
              }
            },
          })

          .state('dashboard.manage_club', {
              url: '/manage-club',
              views: {
                'content@dashboard' : {
                  templateUrl: 'html/content_manage_club.html'
                }
              },
          })

          .state('dashboard.manage_members', {
              url: '/manage-members',
              views: {
                'content@dashboard' : {
                  templateUrl: 'html/content_manage_members.html'
                }
              },
          })

          .state('dashboard.tile_cat', {
              url: '/manage-tile-categories',
              views: {
                'content@dashboard' : {
                  templateUrl: 'html/content_tile_cat.html'
                }
              },
          })

          .state('dashboard.tile_man', {
              url: '/manage-tile',
              views: {
                'content@dashboard' : {
                  templateUrl: 'html/content_tile_manage.html'
                }
              },
          })

})
