d'use strict';

Parse.initialize("O7qNRhkqsSWMW0GW9lcVtezulyIKaIXSVRtgHckx", "epJ3KBQuLaePHDzDW8bmD4BsutMJ1fMHf1uSrq0F");

var Main = Parse.Object.extend({

  className: "Main"
});

var MainCollection = Parse.Collection.extend({

  model: Main,
});

var collection = new MainCollection();

var MainView = Parse.View.extend({

  className: 'cool',

  mainTemplate: _.template($('.main-template').text()),

  events: {

    "click .before": "showBeforeView",
    "click .during": "showDuringView",
    "click .rest"  : "showRestView",
    "click .communication": "showCommunicationView",
    "click .support": "showSupportView",
    "click .featurelist": "showFeatureListView",
    "click .videos": "showVideoView",
    

  },

  initialize: function(){
    $('.container1').append(this.el);
    this.render();
  },

  render: function(){
    var renderedTemplate = this.mainTemplate();
    this.$el.html(renderedTemplate);
  },

  showBeforeView: function(){
    
    new BeforeView();
  },

  showDuringView: function(){
    console.log('button is working')
    new DuringView();
  },

  showRestView: function(){
    new RestView();
  },

  showCommunicationView: function(){
    new CommunicationView();
  },

  showSupportView: function(){
    new SupportView();
  },

   showFeatureListView: function(){
    new FeatureListView();
  },

  showVideoView: function(){
    new VideoView();
  },


});

var main = new MainView();

var BeforeView = Parse.View.extend({

  className: 'cooler',

  beforeTemplate: _.template($('.before-template').text()),

  events: {

    "click .during": "showDuringView",
    "click .rest": "showRestView",
    "click .communication": "showCommunicationView",
    "click .support": "showSupportView",
    "click .before": "showBeforeView",
    "click .duringforward": "showDuringView",
    "click .featurelist": "showFeatureListView",
    "click .videos": "showVideoView",


  },

  initialize: function(){
    $('.container1').empty();
    $('.container1').append(this.el);
    this.render();
  },

  render: function(){
    var renderedTemplate = this.beforeTemplate(this.model);
    this.$el.html(renderedTemplate);
  },

  showDuringView: function(){
    new DuringView();
  },

  showRestView: function(){
    new RestView();
  },

   showFeatureListView: function(){
    new FeatureListView();
  },

  showCommunicationView: function(){
    new CommunicationView();
  },

  showVideoView: function(){
    new VideoView();
  },

  showSupportView: function(){
    new SupportView();
  },

 

  showBeforeView: function(){
    new BeforeView();
  },
});

var DuringView = Parse.View.extend({

  className: 'evencooler',

  duringTemplate: _.template($('.during-template').text()),

  events: {

     "click .during": "showDuringView",
    "click .rest": "showRestView",
    "click .communication": "showCommunicationView",
    "click .support": "showSupportView",
    "click .before": "showBeforeView",
    "click .therestforward": "showRestView",
    "click .featurelist": "showFeatureListView",
    "click .videos": "showVideoView",

  },

  initialize: function(){
    $('.container1').empty();
    $('.container1').append(this.el);
    this.render();
  },

  render: function(){
    var renderedTemplate = this.duringTemplate(this.model);
    this.$el.html(renderedTemplate);
  },

  showDuringView: function(){
    new DuringView();
  },

  showRestView: function(){
    new RestView();
  },

  showVideoView: function(){
    new VideoView();
  },

   showFeatureListView: function(){
    new FeatureListView();
  },

  showCommunicationView: function(){
    new CommunicationView();
  },

  showSupportView: function(){
    new SupportView();
  },

  

  showBeforeView: function(){
    new BeforeView();
  },
});

var RestView = Parse.View.extend({

  className: "coolest",

  restTemplate: _.template($('.rest-template').text()),

  events: {

      "click .during": "showDuringView",
    "click .rest": "showRestView",
    "click .communication": "showCommunicationView",
    "click .support": "showSupportView",
    "click .before": "showBeforeView",
    "click .communicationforward": "showCommunicationView",
    "click .featurelist": "showFeatureListView",
    "click .videos": "showVideoView",

  },

  initialize: function(){
    $('.container1').empty();
    $('.container1').append(this.el);
    this.render();
  },

  render: function(){
    var renderedTemplate = this.restTemplate(this.model);
    this.$el.html(renderedTemplate);
  },

   showDuringView: function(){
    new DuringView();
  },

  showRestView: function(){
    new RestView();
  },

  showVideoView: function(){
    new VideoView();
  },

  showCommunicationView: function(){
    new CommunicationView();
  },

   showFeatureListView: function(){
    new FeatureListView();
  },

  showSupportView: function(){
    new SupportView();
  },

 

  showBeforeView: function(){
    new BeforeView();
  },
});

var CommunicationView = Parse.View.extend({

  className: "com",

  comTemplate: _.template($('.communication-template').text()),

  events: {

       "click .during": "showDuringView",
    "click .rest": "showRestView",
    "click .communication": "showCommunicationView",
    "click .support": "showSupportView",
    "click .before": "showBeforeView",
    "click .supportforward": "showSupportView",
    "click .featurelist": "showFeatureListView",
    "click .videos": "showVideoView",

  },

  initialize: function(){
    $('.container1').empty();
    $('.container1').append(this.el);
    this.render();
  },

  render: function(){
    var renderedTemplate = this.comTemplate(this.model);
    this.$el.html(renderedTemplate);
  },

   showDuringView: function(){
    new DuringView();
  },

   showFeatureListView: function(){
    new FeatureListView();
  },

  showRestView: function(){
    new RestView();
  },

  showCommunicationView: function(){
    new CommunicationView();
  },

  showSupportView: function(){
    new SupportView();
  },

  showVideoView: function(){
    new VideoView();
  },

  

  showBeforeView: function(){
    new BeforeView();
  },
});

var SupportView = Parse.View.extend({

  className: "support",

  supportTemplate: _.template($('.support-template').text()),

  events: {

      "click .during": "showDuringView",
    "click .rest": "showRestView",
    "click .communication": "showCommunicationView",
    "click .support": "showSupportView",
    "click .before": "showBeforeView",
    "click .featurelist": "showFeatureListView",
    "click .featurelistforward": "showFeatureListView",
    "click .videos": "showVideoView",


  },

  initialize: function(){
    $('.container1').empty();
    $('.container1').append(this.el);
    this.render();
  },

  render: function(){
    var renderedTemplate = this.supportTemplate(this.model);
    this.$el.html(renderedTemplate);
  },

    showDuringView: function(){
    new DuringView();
  },

  showRestView: function(){
    new RestView();
  },

  showCommunicationView: function(){
    new CommunicationView();
  },

  showVideoView: function(){
    new VideoView();
  },

  showSupportView: function(){
    new SupportView();
  },

   showFeatureListView: function(){
    new FeatureListView();
  },

 

  showBeforeView: function(){
    new BeforeView();
  },
});

var FeatureListView = Parse.View.extend({

  className: "feature",

  featurelistTemplate: _.template($('.featurelist-template').text()),

  events: {

      "click .during": "showDuringView",
    "click .rest": "showRestView",
    "click .communication": "showCommunicationView",
    "click .support": "showSupportView",
    "click .featurelist": "showFeatureListView",
    "click .before": "showBeforeView",
    "click .videos": "showVideoView",
    "click .videosforward": "showVideoView",
    

  },

  initialize: function(){
    $('.container1').empty();
    $('.container1').append(this.el);
    this.render();
  },

  render: function(){
    var renderedTemplate = this.featurelistTemplate(this.model);
    this.$el.html(renderedTemplate);
  },

      showDuringView: function(){
    new DuringView();
  },

  showRestView: function(){
    new RestView();
  },

  showVideoView: function(){
    new VideoView();
  },

  showCommunicationView: function(){
    new CommunicationView();
  },

  showSupportView: function(){
    new SupportView();
  },

  showFeatureListView: function(){
    new FeatureListView();
  },

  showBeforeView: function(){
    new BeforeView();
  },
});

var VideoView = Parse.View.extend({

  className: "video",

  videoTemplate: _.template($('.video-template').text()),

  events: {

     "click .during": "showDuringView",
    "click .rest": "showRestView",
    "click .communication": "showCommunicationView",
    "click .support": "showSupportView",
    "click .featurelist": "showFeatureListView",
    "click .before": "showBeforeView",
    "click .videos": "showVideoView",
    "click .videosforward": "showVideoView",

  },

  initialize: function(){
    $('.container1').empty();
    $('.container1').append(this.el);
    this.render();
  },

  render: function(){
    var renderedTemplate = this.videoTemplate(this.model);
    this.$el.html(renderedTemplate);
  },

       showDuringView: function(){
    new DuringView();
  },

  showRestView: function(){
    new RestView();
  },

  showVideoView: function(){
    new VideoView();
  },

  showCommunicationView: function(){
    new CommunicationView();
  },

  showSupportView: function(){
    new SupportView();
  },

  showFeatureListView: function(){
    new FeatureListView();
  },

  showBeforeView: function(){
    new BeforeView();
  },
})

