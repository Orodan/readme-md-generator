module.exports = projectInfos => ({
  type: 'input',
  message: '👤  Author name',
  name: 'authorName',
  default: projectInfos.author,
  filter: userInput => userInput.split(',')
})
