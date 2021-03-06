'use strict';

// Configure the urls to respective components : using ngRoute
angular.module('phytotronAccountingApp')
    .config(['$routeProvider', '$locationProvider',
    function config($routeProvider,$locationProvider){
        $locationProvider.hashPrefix('');

        // URL-Component mappings: home and login
        $routeProvider
            .when('/',{
                template: '<login-page></login-page>'
            })
            .when('/home',{
                template: '<home-page></home-page>'
            });

        // URL-Component mappings: project
        $routeProvider
            .when('/project-list', {
                template: '<project-list-page></project-list-page>'
            })
            .when('/project-update/:id', {
                template: '<project-update-page></project-update-page>'
            });

        // URL-Component mappings: client
        $routeProvider
            .when('/client-list',{
                template: '<client-list-page></client-list-page>'
            })
            .when('/client-update/:id',{
                template: '<client-update-page></client-update-page>'
            });

        // URL-Component mappings: invoice
        $routeProvider
            .when('/invoice-project-list',{
                template: '<invoice-project-list-page></invoice-project-list-page>'
            })
            .when('/invoice-history',{
                template: '<invoice-history-page></invoice-history-page>'
            })
            .when('/invoice-revert-project-list',{
                template: '<invoice-revert-project-list-page></invoice-revert-project-list-page>'
            });

        // URL-Component mappings: space usage parameters
        $routeProvider
            .when('/chamber-list',{
                template: '<chamber-list-page></chamber-list-page>'
            })
            .when('/chamber-update/:id',{
                template: '<chamber-update-page></chamber-update-page>'
            })
            .when('/chamber-type-list',{
                template: '<chamber-type-list-page></chamber-type-list-page>'
            })
            .when('/chamber-type-update/:id',{
                template: '<chamber-type-update-page></chamber-type-update-page>'
            })
            .when('/rate-list',{
                template: '<rate-list-page></rate-list-page>'
            })
            .when('/rate-update/:id',{
                template: '<rate-update-page></rate-update-page>'
            })
            .when('/department-list',{
                template: '<department-list-page></department-list-page>'
            })
            .when('/department-update/:id',{
                template: '<department-update-page></department-update-page>'
            })
            .when('/crop-list',{
                template: '<crop-list-page></crop-list-page>'
            })
            .when('/crop-update/:id',{
                template: '<crop-update-page></crop-update-page>'
            })
            .when('/resource-list',{
                template: '<resource-list-page></resource-list-page>'
            })
            .when('/resource-update/:id',{
                template: '<resource-update-page></resource-update-page>'
            });

        // URL-Component mappings: Chamber Usage
        $routeProvider
            .when('/chamber-usage',{
                template:'<chamber-usage-page></chamber-usage-page>'
            });

        // URL_Component mappings: Settings
        $routeProvider
            .when('/application-settings',{
                template:'<application-settings-page></application-settings-page>'
            });
}]);

// Configure the theme of the application
angular.module('phytotronAccountingApp')
    .config( function($mdThemingProvider){
        $mdThemingProvider.theme('default')
            .primaryPalette('red')
            .accentPalette('blue');
});

// Configure Flash Message
angular.module('phytotronAccountingApp')
    .config( function(FlashProvider) {
        FlashProvider.setTimeout(Constants.FLASH_MESSAGES_TIMEOUT);
        FlashProvider.setShowClose(true);
});

/*
// Configure Global Values
angular.module('phytotronAccountingApp')
    .value('user',{
        username:''
    });
*/

// Configure the HttpProvider by injecting with interceptor
angular.module('phytotronAccountingApp')
    .config(['$httpProvider',function ($httpProvider) {
        $httpProvider.interceptors.push('AuthenticationInterceptor');
    }]);