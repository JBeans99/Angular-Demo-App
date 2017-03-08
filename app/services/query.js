
(function() {
"use strict";

    var module = angular.module("snQuery");
   
    module.factory('query', function($http) {


        var clearCreds = function() {  // clear IE's cached creditials for site. Without this, IE keeps REST user creditials and trys to log in REST user when navigating dev20906.service-now.com
            document.execCommand('ClearAuthenticationCache', 'false');
        };  

        
        var getData = function(searchParam) {

            var urlGet = 'https://dev20906.service-now.com/api/now/table/incident?sysparm_query=number%3D' + searchParam;  
                      
              return $http.get(urlGet, {
              headers: {'Content-Type': "application/json",
                        'Accept': "application/json",
                        'Authorization': 'Basic cmVzdFVzZXI6cGFzczEyMw'}                         
              }) 
                .then (function(response){
                    clearCreds();
                  return response.data;       
                });
        };  


            var getUser = function(userID) {
                var urlGet = 'https://dev20906.service-now.com/api/now/table/sys_user/' + userID;  
            
               return $http.get(urlGet, { headers: {'Content-Type': "application/json",
                                                'Accept': "application/json",
                                                'Authorization': 'Basic cmVzdFVzZXI6cGFzczEyMw'}      
              }) 
                .then (function(response){
                    clearCreds();
                    return response.data;
                });
        }; 


        var getChanges = function() {
            
            var startDay = encodeURIComponent(new Date().toJSON().slice(0,10) + " 00:00:00");  // get todays date and format it
            var endDay = encodeURIComponent(new Date(new Date().setTime(new Date().getTime()+20*86400000)).toJSON().slice(0,10) + " 00:00:00"); 
                                                                                            // ^ get date for 20 days from today
            var urlGet = "https://dev20906.service-now.com/api/now/table/change_request?sysparm_query=active%3Dtrue^approval%3Dapproved^start_date%3E%3D"+startDay+"^start_date%3C"+endDay+"&sysparm_limit=50";  

            return $http.get(urlGet, { headers: {'Content-Type': "application/json",
                                            'Accept': "application/json",
                                            'Authorization': 'Basic cmVzdFVzZXI6cGFzczEyMw'}      
            }) 
            .then (function(response){
                clearCreds();
                return response.data;
                
            });
        };  


        var getChangesOutages = function() {
            
            var startDay = encodeURIComponent(new Date().toJSON().slice(0,10) + " 00:00:00");  
            var endDay = encodeURIComponent(new Date(new Date().setTime(new Date().getTime()+20*86400000)).toJSON().slice(0,10) + " 00:00:00"); 
                                                                                           
            var urlGet = "https://dev20906.service-now.com/api/now/table/change_request?sysparm_query=active%3Dtrue^approval%3Dapproved^start_date%3E%3D"+startDay+"^start_date%3C"+endDay+"^u_outage_flag%3Dtrue&sysparm_limit=50";  

            return $http.get(urlGet, { headers: {'Content-Type': "application/json",
                                            'Accept': "application/json",
                                            'Authorization': 'Basic cmVzdFVzZXI6cGFzczEyMw'}      
            }) 
            .then (function(response){
                clearCreds();
                return response.data;
                
            });
        }; 


            



        return {
            getData: getData,
            getUser: getUser,
            getChanges: getChanges,
            getChangesOutages: getChangesOutages
        };
        
    }); // End Factory

}());

