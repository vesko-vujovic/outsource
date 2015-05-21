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

	 //like this we can define default task
	grunt.registerTask('default', function(){
		console.log("This is the default task");
	});

	grunt.registerTask('dev',['concat', 'sass']);

    //configuration for concatenate package
    grunt.initConfig({
    concat: {
       js: {
          src: ['src/app/components/*.js', 'src/app/components/**/*.model.js',
          'src/app/components/**/*.controller.js', 'src/app/components/**/*.directive.js',
          'src/app/components/**/*.service.js'  ],
          dest: 'build/main.js',
       },
    },

    sass: {
    	dist:{
    		files:[{
    			expand: true,
    			cwd: 'src/assets/sass/',
    			src: ['*.scss'],
    			dest: 'src/assets/css',
    			ext: '.css'
    		}]
    	}
    },

    //watch function that will call a task when we have change in document
    watch:{
        js: {
         files: ['src/app/components/**/*.js'],
         tasks: ['concat'],
         options: {
           spawn: false,
         },
       },

       css: {
         files: ['src/assets/sass/*.scss'],
         tasks: ['sass'],
         options: {
           spawn: false,
         },
       },
        
      

    },

   });



	//concatenate package task runner
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');



   /*  !!NOTE
    * When we concatenate files in NSP project, we do it in following steps
    *   1. app.js
    *   2. modules
    *   3. services and directives
    *   4. controllers
    */



}