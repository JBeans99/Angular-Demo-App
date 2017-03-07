
(function() {
"use strict";

    var module = angular.module("snQuery");

   // var query = function($http) {

    
    module.factory('query', function($http) {


        var clearCreds = function() {
            document.execCommand('ClearAuthenticationCache', 'false');
        };  

        
        var getData = function(searchParam) {

            console.log('------- [query.js] Incident # is: ' + searchParam + '   -------');
            var urlGet = 'https://dev20906.service-now.com/api/now/table/incident?sysparm_query=number%3D' + searchParam;  // INC0001621
                      
              return $http.get(urlGet, {
              headers: {'Content-Type': "application/json",
                        'Accept': "application/json",
                        'Authorization': 'Basic cmVzdFVzZXI6cGFzczEyMw'}                         
              }) 
                .then (function(response){
                  return response.data;       
                });
        };  // End getData


            var getUser = function(userID) {
                console.log('------- [query.js] caller is: ' + userID + '   -------');
                var urlGet = 'https://dev20906.service-now.com/api/now/table/sys_user/' + userID;  // INC0001621
            
               return $http.get(urlGet, { headers: {'Content-Type': "application/json",
                                                'Accept': "application/json",
                                                'Authorization': 'Basic cmVzdFVzZXI6cGFzczEyMw'}      
              }) 
                .then (function(response){
                    clearCreds();
                    return response.data;
                });
        }; // End getUser


        var getChanges = function() {
            
            var startDay = encodeURIComponent(new Date().toJSON().slice(0,10) + " 00:00:00");  
            var endDay = encodeURIComponent(new Date(new Date().setTime(new Date().getTime()+20*86400000)).toJSON().slice(0,10) + " 00:00:00"); 
                                                                                            // change 20 to 6 to get 5 days of changes
            var urlGet = "https://dev20906.service-now.com/api/now/table/change_request?sysparm_query=active%3Dtrue^approval%3Dapproved^start_date%3E%3D"+startDay+"^start_date%3C"+endDay+"&sysparm_limit=50";  // INC0001621

            return $http.get(urlGet, { headers: {'Content-Type': "application/json",
                                            'Accept': "application/json",
                                            'Authorization': 'Basic cmVzdFVzZXI6cGFzczEyMw'}      
            }) 
            .then (function(response){
                clearCreds();
                return response.data;
                
            });
        }; // End getChanges   


        var getChangesOutages = function() {
            
            var startDay = encodeURIComponent(new Date().toJSON().slice(0,10) + " 00:00:00");  
            var endDay = encodeURIComponent(new Date(new Date().setTime(new Date().getTime()+20*86400000)).toJSON().slice(0,10) + " 00:00:00"); 
                                                                                            // change 20 to 6 to get 5 days of changes
            var urlGet = "https://dev20906.service-now.com/api/now/table/change_request?sysparm_query=active%3Dtrue^approval%3Dapproved^start_date%3E%3D"+startDay+"^start_date%3C"+endDay+"^u_outage_flag%3Dtrue&sysparm_limit=50";  // INC0001621

            return $http.get(urlGet, { headers: {'Content-Type': "application/json",
                                            'Accept': "application/json",
                                            'Authorization': 'Basic cmVzdFVzZXI6cGFzczEyMw'}      
            }) 
            .then (function(response){
                clearCreds();
                return response.data;
                
            });
        }; // End getChanges   


            



        return {
            getData: getData,
            getUser: getUser,
            getChanges: getChanges,
            getChangesOutages: getChangesOutages
        };
        
    }); // End Factory

}());

//   