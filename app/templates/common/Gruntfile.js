// Generated on <%= (new Date).toISOString().split('T')[0] %> using <%= pkg.name %> <%= pkg.version %>
'use strict';
var LIVERELOAD_PORT = 35729;
var lrSnippet = require('connect-livereload')({ port: LIVERELOAD_PORT });
var mountFolder = function (connect, dir) {
    return connect.static(require('path').resolve(dir));
};

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);
    require('time-grunt')(grunt);

    // configurable paths
    var yeomanConfig = {
        app: 'app',
        dist: 'dist'
    };

    try {
        yeomanConfig.app = require('./bower.json').appPath || yeomanConfig.app;
    } catch (e) {
    }

    grunt.initConfig({
        yeoman: yeomanConfig,
        bower: {
            install: {
                options: {
                    targetDir: 'bower',
                    copy: false,
                    install: true,
                    verbose: true
                }
            }
        },
        watch: {
            styles: {
                files: ['<%%= yeoman.app %>/styles/{,*/}*.css'],
                tasks: ['copy:styles', 'autoprefixer']
            },
            karma: {
                files: [
                    '<%%= yeoman.app %>/scripts/{,*/}*.js',
                    '<%%= yeoman.app %>/widgets/{,*/}*.js',
                    'test/**/*Spec.js'
                ],
                tasks: ['karma:unitAuto:run']
            },
            ngTemplates: {
                files: ['<%%= yeoman.app %>/widgets/**/*.html'],
                tasks: ['ngtemplates']
            },
            less: {
                files: ['<%%= yeoman.app %>/styles/*.less'],
                tasks: ['less:development']
            },
            livereload: {
                options: {
                    livereload: LIVERELOAD_PORT
                },
                files: [
                    '<%%= yeoman.app %>/{,*/}*.html',
                    '.tmp/styles/{,*/}*.css',
                    '{.tmp,<%%= yeoman.app %>}/scripts/{,*/}*.js',
                    '<%%= yeoman.app %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
                    '.tmp/scripts/templates.js'
                ]
            }
        },
        ngtemplates: {
            prototypeApp: {
                src: '<%%= yeoman.app %>/widgets/**/*.html',
                dest: '.tmp/scripts/templates.js',
                options: {
                    url: function (url) {
                        return url.replace(/(app\/widgets\/([\s\S]*?)\/)/, '').replace(/.html/, '');
                    }
                }
            }
        },
        less: {
            development: {
                opions: {
                    paths: ['<%%= yeoman.app %>/styles']
                },
                files: {
                    '.tmp/styles/main.css': '<%%= yeoman.app %>/styles/netverify-client.less',
                    '.tmp/styles/upload-v2.css': '<%%= yeoman.app %>/styles/upload-v2.less'
                }
            }
        },
        autoprefixer: {
            options: ['last 1 version'],
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '.tmp/styles/',
                        src: '{,*/}*.css',
                        dest: '.tmp/styles/'
                    }
                ]
            }
        },
        connect: {
            options: {
                port: 9000,
                // Change this to '0.0.0.0' to access the server from outside.
                hostname: 'localhost'
            },
            livereload: {
                options: {
                    middleware: function (connect) {
                        return [
                            lrSnippet,
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, yeomanConfig.app)
                        ];
                    }
                }
            },
            test: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, '.tmp'),
                            mountFolder(connect, 'test')
                        ];
                    }
                }
            },
            dist: {
                options: {
                    middleware: function (connect) {
                        return [
                            mountFolder(connect, yeomanConfig.dist)
                        ];
                    }
                }
            }
        },
        open: {
            server: {
                url: 'http://localhost:<%%= connect.options.port %>'
            }
        },
        clean: {
            dist: {
                files: [
                    {
                        dot: true,
                        src: [
                            '.tmp',
                            '<%%= yeoman.dist %>/*',
                            '!<%%= yeoman.dist %>/.git*'
                        ]
                    }
                ]
            },
            server: '.tmp'
        },
        jshint: {
            options: {
                jshintrc: '.jshintrc'
            },
            all: [
                'Gruntfile.js',
                '<%%= yeoman.app %>/scripts/{,*/}*.js',
                '<%%= yeoman.app %>/widgets/**/{,*/}*.js'
            ]
        },
        rev: {
            dist: {
                files: {
                    src: [
                        '<%%= yeoman.dist %>/scripts/{,*/}*.js',
                        '<%%= yeoman.dist %>/styles/{,*/}*.css',
                        '<%%= yeoman.dist %>/images/{,*/}*.{png,jpg,jpeg,gif,webp,svg}',
                        '<%%= yeoman.dist %>/styles/fonts/*'
                    ]
                }
            }
        },
        useminPrepare: {
            html: '<%%= yeoman.app %>/index.html',
            options: {
                dest: '<%%= yeoman.dist %>'
            }
        },
        usemin: {
            html: ['<%%= yeoman.dist %>/{,*/}*.html'],
            css: ['<%%= yeoman.dist %>/styles/{,*/}*.css'],
            options: {
                dirs: ['<%%= yeoman.dist %>']
            }
        },
        imagemin: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '<%%= yeoman.app %>/images',
                        src: '{,*/}*.{png,jpg,jpeg}',
                        dest: '<%%= yeoman.dist %>/images'
                    }
                ]
            }
        },
        svgmin: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '<%%= yeoman.app %>/images',
                        src: '{,*/}*.svg',
                        dest: '<%%= yeoman.dist %>/images'
                    }
                ]
            }
        },
        htmlmin: {
            dist: {
                options: {
                    /*removeCommentsFromCDATA: true,
                     // https://github.com/yeoman/grunt-usemin/issues/44
                     //collapseWhitespace: true,
                     collapseBooleanAttributes: true,
                     removeAttributeQuotes: true,
                     removeRedundantAttributes: true,
                     useShortDoctype: true,
                     removeEmptyAttributes: true,
                     removeOptionalTags: true*/
                },
                files: [
                    {
                        expand: true,
                        cwd: '<%%= yeoman.app %>',
                        src: ['*.html', 'views/*.html'],
                        dest: '<%%= yeoman.dist %>'
                    }
                ]
            }
        },
        // Put files not handled in other tasks here
        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: '<%%= yeoman.app %>',
                        dest: '<%%= yeoman.dist %>',
                        src: [
                            '*.{ico,png,txt}',
                            '.htaccess',
                            'bower_components/**/*',
                            'images/{,*/}*.{gif,webp,png,jpg}',
                            'styles/fonts/*'
                        ]
                    },
                    {
                        expand: true,
                        cwd: '.tmp/images',
                        dest: '<%%= yeoman.dist %>/images',
                        src: [
                            'generated/*'
                        ]
                    }
                ]
            },
            images: {
                expand: true,
                cwd: '<%%= yeoman.app %>/images',
                dest: '.tmp/images/',
                src: '{,*/}*.{gif,webp,png,jpg}'
            },
            styles: {
                expand: true,
                cwd: '<%%= yeoman.app %>/styles',
                dest: '.tmp/styles/',
                src: '{,*/}*.css'
            },
            templates: {
                expand: true,
                cdw: '.tmp/scripts/',
                src: '{,*/}*.js'
            }
        },
        concurrent: {
            server: [
                'copy:styles',
                'copy:images'
            ],
            test: [
                'copy:styles'
            ],
            dist: [
                'copy:styles',
                'imagemin',
                'svgmin',
                'htmlmin'
            ]
        },
        karma: {
            unit: {
                configFile: 'karma.conf.js',
                singleRun: true
            },
            unitAuto: {
                configFile: 'karma.conf.js',
                background: true
            }
        },
        cdnify: {
            dist: {
                html: ['<%%= yeoman.dist %>/*.html']
            }
        },
        ngmin: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '<%%= yeoman.dist %>/scripts',
                        src: '*.js',
                        dest: '<%%= yeoman.dist %>/scripts'
                    }
                ]
            }
        },
        uglify: {
            dist: {
                files: {
                    '<%%= yeoman.dist %>/scripts/scripts.js': [
                        '<%%= yeoman.dist %>/scripts/scripts.js'
                    ]
                }
            }
        }
    });

    grunt.registerTask('install', [
        'install-dependencies',
        'bower:install'
    ]);

    grunt.registerTask('server', function (target) {
        if (target === 'dist') {
            return grunt.task.run(['build', 'open', 'connect:dist:keepalive']);
        }

        grunt.task.run([
            'clean:server',
            'ngtemplates',
            'less:development',
            'concurrent:server',
            'autoprefixer',
            'connect:livereload',
            'open',
            'karma:unitAuto',
            'watch'
        ]);
    });

    grunt.registerTask('test', [
        'clean:server',
        'concurrent:test',
        'autoprefixer',
        'connect:test',
        'karma'
    ]);

    grunt.registerTask('build', [
        'clean:dist',
        'useminPrepare',
        'concurrent:dist',
        'autoprefixer',
        'copy:dist',
        'cdnify',
        'ngmin',
        'uglify',
        'rev',
        'usemin'
    ]);

    grunt.registerTask('default', [
        'install',
        'build',
        'jshint',
        'test'
    ]);
};
