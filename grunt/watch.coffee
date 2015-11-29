module.exports =

  grunt:
    files: ['Gruntfile.js', 'config/grunt/**.{js,coffee,yaml}']
    options:
      reload: true

  eslint:
    files: ['lib/**/*.js']
    tasks: ['eslint']
    options:
      atBegin: true
