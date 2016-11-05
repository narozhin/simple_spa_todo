

/*
  Task class
  Extend Backbone class Model
  Contain all task attributes
*/
var Task = Backbone.Model.extend({

  // Default values
  defaults : {
    title : 'New title',
    complete : false
  },

  /**
  * Initialize new task
  */
  initialize : function() {
    if(!this.get('title')) this.set({title : this.defaults.title}); // If no title, set default
    this.on('change:title', this.sortCollection, this); // Set change title handler
  },

  /**
   * Remove task
   */
  clear : function() {
    this.destroy();
  },

  /**
   * Toggle param "complete"
   * @return task
   */
  toggleState : function() {
    this.set({
      complete : !this.get('complete')
    });
    return this;
  },

  /**
   * Rename task
   * @return task
   */
  rename : function(title) {
    this.set({
      title : title
    });
    return this;
  },

  /**
   * Sort collection
   * if change title task - sort collection
   */
  sortCollection : function() {
    if(!this.collection) return;
    this.collection.sort();
  }

});
