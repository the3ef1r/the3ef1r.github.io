module.exports = function(grunt) {

    // 1. Вся настройка находится здесь
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

            concat: {
                dist: {
                    src: [
                        'js/jquery.min.js' , // Конкретный файл
                        'js/*.js' // Все JS

                    ],
                    dest: 'js/build/production.js',
                }
            },
            uglify: {
                build: {
                    src: 'js/build/production.js',
                    dest: 'js/build/production.min.js'
                }
            },
            cssmin: {
                options: {
                    mergeIntoShorthands: false,
                    roundingPrecision: -1
                },
                target: {
                    files: {
                        'production.css': ['css/bootstrap.min.css', 'css/slick.css', 'css/slick-theme.css','css/style.css',]
                    }
                }
            }

    });

    // 3. Тут мы указываем Grunt, что хотим использовать этот плагин
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};