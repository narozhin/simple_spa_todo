

/*
  Release Task View
*/
var TaskView = Backbone.View.extend({
  tagName   : 'li', // Element tag name
  template  : _.template($('#tpl-task').html()), // Load template content

  events : {
    'click .rm-task'         : 'removeTask', // Set click remove handler
    'click .cmplt-task'      : 'completeToggle', // Set click complete handler
    'click .task-title'      : 'toggle', // Set click task title handler
    'keyup .task-edit-title' : 'onTaskEditKeyUp' // Set change title handler
  },

  /**
   * Init task view
   */
  initialize : function() {
    this.model.on('change', this.render, this);
    this.model.on('remove', this.remove, this);
  },

  /**
   * Draw make DOM object from task
   * @return view
   */
  render : function() {
    this.$el.html(this.template(this.model.toJSON()));
    this.$el.toggleClass('complete', this.model.get('complete'));
    return this;
  },

  /**
   * Click "remove" handler
   */
  removeTask : function() {
    var self = this;
    this.$el.fadeOut(300, function() { // Animation
      self.model.clear(); // Remove task
    });
  },

  /**
   * Click "complete" handler
   */
  completeToggle : function() {
    this.model.toggleState().save(); // Change complete state and save task
  },

  /**
   * Toggle visible task title and task edit input
   */
  toggle : function() {
    this.$('.task-title').toggleClass('hide');
    this.$('.task-edit-title').toggleClass('hide').val(this.model.get('title')).focus();
  },

  /**
   * KeyUp task-title handler
   */
  onTaskEditKeyUp : function(e) {
    switch (e.keyCode) {
      case 13: // Key code "enter"
        var title = this.$('.task-edit-title').val(); // Get current task title
        this.toggle();
        if(!title) return;
        this.model.rename(title).save(); // Change task title and save
        break;
      case 27: // Key code "esc"
        this.toggle();
        break;
      default:
        return true;
    }
  }

});
