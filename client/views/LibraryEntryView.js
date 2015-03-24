// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',
//add a tag that when clicked triggers an enqueue event rather than a play event.
  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),
  
  events: {
    'click': function() {
      this.model.queue(); //changed from 'play', calls queue method of SongModel that triggers queue
      console.log("click");
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
