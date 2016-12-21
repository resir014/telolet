module.exports = function (grunt) {

  // Load all tasks matching the `grunt-*` pattern
  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    // Project configuration
    pkg: grunt.file.readJSON('package.json'),

    // Optimise/minify images
    imagemin: {
      publish: {
        options: {
          optimizationLevel: 3,
          progressive: true,
          interlaced: true,
          svgoPlugins: [{ removeViewBox: false }]
        },
        files: [{
          expand: true,
          cwd: 'public',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'public'
        }]
      },
    },

    // Lint SCSS files
    scsslint: {
      test: [
        '_scss/**/*.scss',
      ],
      options: {
        bundleExec: true,
        config: '.scss-lint.yml'
      },
    },

    // Builds Jekyll website to `_site` directory
    jekyll: {
      options: {
        bundleExec: true
      },
      serve: {
        options: {
          drafts: true,
          serve: true
        }
      }
    }
  });

  // Default task
  grunt.registerTask('default', ['test']);

  // Lint SCSS files
  grunt.registerTask('test', ['scsslint']);

  // Start a local server
  grunt.registerTask('serve', ['jekyll:serve']);

  // Minify images
  grunt.registerTask('optimise', ['imagemin']);
};
