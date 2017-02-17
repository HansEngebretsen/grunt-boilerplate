/*
  ==========
  Main Grunt Build Configuration file

  This file is the main configuration object for the Grunt
  task runner.

  GruntJS: http://gruntjs.com/
  ==========
*/

module.exports = function(grunt) {
  /* ====================
     Load the NPM tasks from the package.json automatically.
     ==================== */

  require('load-grunt-tasks')(grunt);


  grunt.initConfig({ // Start the Party
    pkg: grunt.file.readJSON('package.json'), // where the package.json be

    /*
    Set options for various tasks within the config file.
    These options can be overriden at the task level, but
    are listed here to provide a DRY interface for common
    file paths, etc.  Feel free to add commonly used options.
    */

    options: {
      src: {
        dirname: '',
        images: 'img',
        sass: 'sass',
        js: 'js'
      },
      output: {
        dirname: '',
        images: 'img',
        css: 'css',
        js: 'js/build'
      }
    },

    /* --------------------
        browserfiy task
       --------------------  */
    browserify: {
      all: {
        options: {
          transform: [
            ['babelify', {
              presets: ['es2015', 'stage-0'],
              "plugins": ["transform-decorators-legacy"]
            }]
          ]
        },
        expand: true,
        cwd: "<%= options.src.js %>/",
        src: ["*.js", "!build/*", "!libs/*"],
        dest: "<%= options.output.js %>/",
        nonull: true
      }
    },

    /* --------------------
       concat task (just for libs)
      --------------------  */
    concat: {
      // 2. Configuration for concatinating files goes here.
      dist: {
        src: ['<%= options.src.js %>/libs/*.js', '<%= options.output.js %>/main.js'], // everything in libs, with our babelified js
        dest: '<%= options.output.js %>/production.js',
      }
    },

    /* --------------------
       Uglify task
      --------------------  */
    uglify: {
      options: {
        preserveComments: false
      },
      build: {
        src: '<%= options.output.js %>/production.js',
        dest: '<%= options.output.js %>/production.min.js'
      }
    },

    /* --------------------
       imagemin task
      --------------------  */
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: '<%= options.src.images %>/',
          src: ['*.{png,jpg,gif}'],
          dest: '<%= options.output.images %>/'
        }]
      }
    },

    /* --------------------
       sass task
      --------------------  */
    sass: {
      dev: {
        options: {
          outputStyle: 'expanded',
          sourceComments: 'true',
          sourcemap: 'file'
        },
        files: {
          '<%= options.output.css %>/styles.css': '<%= options.src.sass %>/styles.scss'
        }
      },
      prod: {
        options: {
          outputStyle: 'compressed'
        },
        files: {
          '<%= options.output.css %>/styles.min.css': '<%= options.src.sass %>/styles.scss'
        }
      }
    },

    /* --------------------
       Autoprefix things for meh
      --------------------  */
    autoprefixer: {
      options: {
        browsers: ['last 13 versions', '> 5%', 'ie 8', 'ie 7', 'ie 9']
      },
      dist: {
        files: {
          '<%= options.output.css %>/styles.css': '<%= options.output.css %>/styles.css'
        }
      }

    },

    /* --------------------
        Browsersync task
       --------------------  */
    browserSync: {
      bsFiles: {
        src: [
          '<%= options.output.css %>/*.css',
          '<%= options.src.js %>/*.js'
        ]
      },
      options: {
        watchTask: true,
        server: {
          baseDir: "<%= options.output.dirname %>"
        }
      }
    },


    /* --------------------
        watch settigns
       --------------------  */
    watch: {
      options: {
        livereload: true
      },
      scripts: {
        files: ['<%= options.src.js %>/**/**/*.js'],
        tasks: ['browserify', 'concat'],
        options: {
          spawn: false,
        }
      },
      css: {
        files: ['<%= options.src.sass %>/**/*.scss'],
        // tasks: ['sass', 'autoprefixer', 'browserSync'],
        tasks: ['sass', 'autoprefixer', 'browserSync'],
        options: {
          spawn: false,
        }
      },
      images: {
        files: ['<%= options.src.images %>/**/*.{png,jpg,gif}', '<%= options.src.images %>/*.{png,jpg,gif}'],
        tasks: ['imagemin'],
        options: {
          spawn: false,
        }
      }
    }
  });



// 4. Where we tell Grunt what to do when we type "grunt" into the terminal.
grunt.registerTask('default', ['browserify', 'concat', 'uglify', 'sass', 'autoprefixer']);
grunt.registerTask('watchs', ['browserSync', 'watch']);

};