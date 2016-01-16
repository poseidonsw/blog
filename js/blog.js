$(function() {

    Parse.$ = jQuery;

    // Replace this line with the one on your Quickstart Guide Page
    Parse.initialize("3DqICYxfo0xyFGkyGQCsZBAukqiCYkVqLc1ea7Qz", "Di3Q18z7jTolpgnarR9DFRzoXnYDAR5FIbWtV9Q5");

    var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
      alert("yay! it worked");
    });

});
