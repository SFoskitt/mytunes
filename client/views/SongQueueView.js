// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: "table",

  initialize: function() {

    //this.collection.on('add remove', this.render, this);
  
    // debugger;
    this.render();
    // this.enqueue();
  },

  // enqueue: function() {
  //   // debugger;
  //   // this.model.on('enqueue', function(model){
  //     debugger;
  //   this.model.on('enqueue', function(){
  //   console.log("enqueue click...")
  //   }, this);
  //   // this.playerView.setSong(model.get('currentSong'));
  //   // })
  // },

  render: function() {
  this.$el.children().detach();

  this.$el.html('<th>Queue</th>').append(
  	this.collection.map(function(song){
      return new SongQueueEntryView({model: song}).render();
  	})
  );
  }

});
