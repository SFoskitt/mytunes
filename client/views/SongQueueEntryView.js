// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({

  tagName: 'tr',
//add a tag that when clicked triggers an enqueue event rather than a play event.
  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td>'),	
  
  events: {
    'click': function() {
      this.model.dequeue(); //changed from 'play', calls queue method of SongModel that triggers queue
    }
  },

	render: function(){
    // debugger;
	    return this.$el.html(this.template(this.model.attributes));
	  }

  });
	