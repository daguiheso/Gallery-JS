
module.exports = function (grunt) {
	grunt.initConfig({
	  connect: {
	    server: {
	      options: {
      		port: 9000,
          base: ''
        }
    	}
    },
    watch: {
      project: {
        files: ['**/*.js', '**/*.html', '**/*.json', '**/*.css'],
        options: {
          livereload: true
        }
      }
    },
	  bower: {
	    install: {
	      options: {
	        targetDir: './vendors',
	        layout: 'byComponent',
	        install: true,
	        verbose: false,
	        cleanBowerDir: true
	      }
	    }
	  }
	});
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['connect', 'watch']);
	grunt.loadNpmTasks('grunt-bower-task');
};