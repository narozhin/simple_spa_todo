
/**
 * App View class
 * Extend Backbone class View
 */
var App = Backbone.View.extend({
  list : new TaskList(), // New Tasks collection
  el : $('#app'), // Set app DOM element

  events : {
    'click #add-task-btn'  : 'addTask', // Set click "add" button handler
    'keyup #new-task-name' : 'addTaskOnEnter' // Set keyup handler
  },

  /**
   * Initialize App
   */
  initialize : function() {
    // If collection changet, automatically called method 'sort' Backbone and app method render
    this.list.on('sort', this.render, this);
    this.list.fetch(); // load tasks from localStorage
  },

  /**
   * Draw App
   */
  render : function() {
    this.$('#task-list').html(''); // Clear DOM tasks-list
    var self = this;
    this.list.each(function(task) { // Add Tasks DOM elements
      var view = new TaskView({model : task});
      self.$('#task-list').append(view.render().$el);
    })
  },

  /**
   * Click "add" handler
   */
  addTask : function() {
    var title = this.$('#new-task-name').val(); // Get title
    if(!title) return alert('Please enter title'); // if no title
    var task = new Task(); // Create new task
    this.list.add(task.rename(title)); // Set task title
    task.save(); // Save title
    this.$('#new-task-name').val(''); // Clear task-name input
  },

  /**
   * KeyUp task-name input handler
   */
  addTaskOnEnter : function(e){
    if(e.keyCode == 13) return this.addTask(); // if keycode "enter" calll addTask method and add new task
  }

});
