module.exports = function (grunt) {
  // Configure grunt
  grunt.initConfig({
    sprite:{
      cs: {
        src: 'img/to-sprite-cs/*.png',
        dest: 'img/sprites/cs/spritesheet.png',
        destCss: 'css/cs-sprites.css'
      },
      icons: {
        src: 'img/to-sprite-icons/*.png',
        dest: 'img/sprites/icons/spritesheet.png',
        destCss: 'css/icons-sprites.css'
      },
       partners: {
        src: 'img/to-sprite-partners/*.png',
        dest: 'img/sprites/partners/spritesheet.png',
        destCss: 'css/partners-sprites.css'
      },
       team: {
        src: 'img/to-sprite-team/*.png',
        dest: 'img/sprites/team/spritesheet.png',
        destCss: 'css/team-sprites.css'
      }
    }
  });

  // Load in `grunt-spritesmith`
  grunt.loadNpmTasks('grunt-spritesmith');
};