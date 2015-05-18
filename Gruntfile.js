/**
 * Grunt is a node.js package for running tasks
 *
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
     dist: {
       src: ['src/intro.js', 'src/project.js', 'src/outro.js'],
       dest: 'dist/built.js',
      },
    },
   });



	//concatenate package
	grunt.loadNpmTasks('grunt-contrib-concat');









   /*  !!NOTE
    * When we concatenate files in NSP project, we do it in following steps
    *   1. app.js
    *   2. modules
    *   3. services and directives
    *   4. controllers
    */



}