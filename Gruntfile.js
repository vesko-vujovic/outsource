/**
 * Grunt is a node.js package for running tasks
 */
module.exports = function(grunt) {

	grunt.registerTask('speak', function(){
		console.log("I'm speaking");
	});

	grunt.registerTask('yell', function(){
		console.log("I'm YELLING");
	});
     
    //like this we can call 2 methods in grunt
	grunt.registerTask('both',['speak', 'yell']);

	 //like this we can define deafault task
	grunt.registerTask('default', function(){
		console.log("This is the default task");
	});

    //configuration for concatenate package
    grunt.initConfig({
    concat: {
       options: {
       separator: ';',
    },
    dist: {
      src: ['src/intro.js', 'src/project.js', 'src/outro.js'],
      dest: 'dist/built.js',
      },
    },
   });



	//concatenate package
	grunt.loadNpmTasks('grunt-contrib-concat');



    



}