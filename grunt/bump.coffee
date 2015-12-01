module.exports =

  options:
    files: ['package.json']
    commit: true
    commitMessage: 'Release v%VERSION%'
    commitFiles: ['-a']
    createTag: true
    push: false
