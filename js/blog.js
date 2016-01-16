$(function() {

  Parse.$ = jQuery;

  // Replace this line with the one on your Quickstart Guide Page
  Parse.initialize("3DqICYxfo0xyFGkyGQCsZBAukqiCYkVqLc1ea7Qz", "Di3Q18z7jTolpgnarR9DFRzoXnYDAR5FIbWtV9Q5");

  var Blog = Parse.Object.extend("Blog");

  var query = new Parse.Query("Blog");
  query.find({
    success: function(results) {
      var blogs = new Array();
      for (var i = 0; i < results.length; i++) {
        var object = results[i];
        blogs.push(object.toJSON());
      }
      // results is an array of Parse.Object.
      var blogsView = new BlogsView({ collection: blogs });
      blogsView.render();
      $('.main-container').html(blogsView.el);
    },
    error: function(error) {
      // error is an instance of Parse.Error.
      console.log(error);
    }
  });

  var BlogsView =  Backbone.View.extend({
    template: Handlebars.compile($('#blogs-tpl').html()),
    render: function(){
        var collection = { blog: this.collection };
        this.$el.html(this.template(collection));
    }
  });
});
