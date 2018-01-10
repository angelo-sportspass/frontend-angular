(function (window, angular, undefined) {
  'use strict';

  angular.module('clusterMgmtApp')
  .controller('clusterMgmtAppCtrl', clusterMgmtAppCtrl)
  .controller('layoutHeaderCtrl', layoutHeaderCtrl)
  .controller('layoutSidebarCtrl', layoutSidebarCtrl)
  .controller('layoutContentCtrl', layoutContentCtrl)
  .controller('pageNotFoundCtrl', pageNotFoundCtrl);


  // clusterMgmtAppCtrl.$inject = ['$scope'];
  layoutHeaderCtrl.$inject = ['$scope'];
  layoutSidebarCtrl.$inject = ['$scope', '$state', '$stateParams'];
  layoutContentCtrl.$inject = ['$scope', '$rootScope'];
  pageNotFoundCtrl.$inject = ['$scope', '$state', '$stateParams'];

  function clusterMgmtAppCtrl($scope){

  }

  function layoutHeaderCtrl($scope){

  }

  function layoutSidebarCtrl($scope, $state, $stateParams){
	$scope.$state = $state;
  }

  function layoutContentCtrl($scope, $rootScope){

  }

  function pageNotFoundCtrl($scope, $state, $stateParams){

  }

})(window, window.angular);
