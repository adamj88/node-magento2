module.exports =

  options:
    sourceMap: false
    presets: ['es2015']

  dist:
    files: [
      expand: true
      cwd: 'lib/'
      src: ['**/*.js']
      dest: 'dist/'
    ]
