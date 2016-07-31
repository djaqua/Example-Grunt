module.exports = function(grunt) {
    
    // Do grunt-related things in here
    
    grunt.registerTask('default', function() {
        console.log("Hello, world!");
    });



    grunt.registerTask('custom', function() {
        console.log("Hello, world from a custom grunt task!");
    });


};

