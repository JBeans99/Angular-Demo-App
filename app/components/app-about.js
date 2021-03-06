(function() {
    "use strict";

    var module = angular.module("snQuery");

    
    module.component("appAbout", {
        template: '  <div class="homePage">This is an AngularJS demo application. ' + 
      '   The application uses the REST API available from a personal ServiceNow instance to get information about incidents and Change Requests.  <br /> <br />  '  +
      '  The search box is a standalone/reusable component that allows for searching of specific incident numbers. The search component uses a service to get and set the user input which can then be accessed from other components.' +
      ' <br />  Some example incident numbers that can be searched for are:   ' +
      ' <br /> &nbsp; &nbsp;  INC0000055   <br /> &nbsp; &nbsp;  INC0000054  <br /> &nbsp; &nbsp;     INC0000053 <br />    ' +
      '  <br /> This applications utilizes the Angular Component model with the following libraries  ' +
      ' <ul>   <li>AngularJS v1.5.9</li>   <li>Angular UI Router v1.0.0-rc.1</li>   <li>Bootstrap 3.3.7</li>   <li>JQuery 2.2.4</li> </ul> ' +
      ' Source can be found in my GitHub Repo <a href="https://github.com/JBeans99/Angular-Demo-App/"> https://github.com/JBeans99/Angular-Demo-App/ </a>' +
      ' <br /> </div>'
   
    });

}());