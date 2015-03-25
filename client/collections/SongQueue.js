// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    // var songQueue = new SongQueue;

    this.on('add', this.enqueue, this);
    
  },
  enqueue: function(song) {
  	// debugger;
  	 if (this.length===1) {
    	this.playFirst();
  }
  },

  playFirst: function() {
  	this.at(0).play();
  },

  playNext: function() {
  	this.shift()
  	if(this.length===0){
  		this.trigger('stop');
  	} else {
  		this.playFirst();

  	}
  }

});