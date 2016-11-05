
/*
  INCLUDE LIBRARY
*/

//= lib/jquery-3.1.1.js
//= lib/underscore.js
//= lib/backbone.js
//= lib/backbone.localstorage.js
//= lib/bootstrap.js

/*
  INCLUDE CLASSES
*/

//= classes/Task.js
//= classes/TaskView.js
//= classes/TaskList.js
//= classes/App.js

(function(document, window, $) {

  $(document).ready(function() {
    var app = new App(); // Start ToDo application
  });

})(document, window, jQuery.noConflict());
