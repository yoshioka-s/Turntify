/** 
* This will contain information needed throughout the app, and methods to update and relate
* this information
*/
angular.module('turntify.services')
.factory('UserService', function($http, $state, $rootScope ) /*might require "RequestService" at some point*/{
  //"persistent data" could include:
  //    -user data (to start: could also be in a "session")
  //    -full song information for queue(i.e spotify track ids, and any other un-displayed information)

  //Functions could access different parts of the persistent data needed by different
  //parts of the app: the player view might need app id, but the queue might just list track
  // names, etc.
  
  //Logouts could be handled here if they aren't handled in a session    

  return {
    //return functions to access persistent data. 
    //Probably don't want to return persistent data itself, just functions
    //also returns any view-agnostic and user-session-y functions
  };
});