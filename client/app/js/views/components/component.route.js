'use strict';

function ComponentRoutes($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.otherwise('/home');

  $stateProvider
    // .state('App', {
    //   title: 'cstaton App',
    //   // url: '/layout',
    //   // template: '<div><p>Hello World</p></div>',
    //   templateUrl: 'layout/layout.html',
    //   controller: 'LayoutController as layoutCtrl',
    //   resolve: {
    //     testData: function() {
    //      console.log('Inside main layout resolve block'); 
    //     }
    //   }
    // })
    .state('App.Component', {
      title: "Home",
      // controller: 'HomeController as HomeCtrl',
      template: '<div><p>Component view!!</p></div>',
      url: '/home'
    });

}

export default ComponentRoutes;