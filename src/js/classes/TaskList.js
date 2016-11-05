
/*
  TaskList class
  Extand Backbone class Collection
  Contain tasks array
  NOTE: lib backbone.localStorage reload default backbone method "sync",
  and use just for example
*/

var TaskList = Backbone.Collection.extend({
  model : Task, // Model items
  localStorage : new Store('todo'), // Init localStorage by key "todo"

  /**
   * Sort list method
   * @return sort criteria
   */
  comparator : function(model) {
    var str = model.get("title"); // Get task title
    str = str.toLowerCase(); // To lower case
    str = str.split(""); // Remove all spaces
    str = _.map(str, function(letter) { // Reverse chars code
      return String.fromCharCode(-(letter.charCodeAt(0)));
    });
    return str;
  }

});
