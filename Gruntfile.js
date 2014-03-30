module.exports = function(grunt) {
        grunt.initConfig({
    less: {
        development: {
            files: {
                "css/screen.css": "less/screen.less"
            }
        },
        production: {
            options: {
                cleancss: true,
                compress: true,
                optimization: 0
            },
            files: {
                "css/screen.css": "less/screen.less"
            }
        }
    },
    watch: {
            files: "less/*",
            tasks: ["less:development"]
        }

        })

    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
}
