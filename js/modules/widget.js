    // Add category
(function($, Universal){
var s,
    SampleWidget = {

      settings: {
        containerClass   : '.container'
      },

      init: function() {
        s = this.settings;
        this.bindActions();
      },

      bindActions: function(){
        s.containerClass.on("click", function(e){
          SampleWidget.sampleFunction();
        });
      },

      sampleFunction: function(){
      }
    };
    Universal.sampleWidget = SampleWidget;

})(jQuery, Universal);
