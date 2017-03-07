(function() {
    "use strict";

    var app = angular.module("snQuery", ["ui.router",  "angular-loading-bar"]);  

    // configure loading bar
    app.config(['cfpLoadingBarProvider', function(cfpLoadingBarProvider) {
        cfpLoadingBarProvider.parentSelector = '#loading-bar-container';
        cfpLoadingBarProvider.spinnerTemplate = '<div> <br />  <i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i> <span class="sr-only">Loading...</span> </div>';
    }]);

    app.config(function($stateProvider, $urlServiceProvider) {

        $urlServiceProvider.rules.otherwise({ state: 'home' });

        $stateProvider       
            .state ('home',{ 
                url: '/home', 
                component: 'appHome'  
            })

                .state('home.result', {   // child of home
                    url: '/result', 
                    component: 'appResult',
                })

            .state('home.about', { 
                url: '/about', 
                component: 'appAbout',
            })       

            .state('changes',{ 
                url: '/all_changes', 
                component: 'appChanges',
            })

            .state('changesWithOutage',{ 
                url: '/Outage_Changes', 
                component: 'appChangesOutages',
            });


            
        // To add each state to an array we can loop over the state definitions and register them
            // states.forEach(function(state) {
            //     $stateProvider.state(state);
            // });
    });

}());