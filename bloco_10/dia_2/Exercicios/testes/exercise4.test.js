const getRepos = require('../exercicio4');

describe('Testing function getRepos', () => {
  it('should check if there is a specific repo in the array', () => {
    const urlParam = 'https://api.github.com/orgs/tryber/repos';
    return getRepos(urlParam).then(response => {
      expect(response).toContain('sd-01-week4-5-project-todo-list')
    })
  }, 10000);
});

describe('Testing function getRepos', () => {
  it('should check if there is a specific repo in the array', () => {
    const urlParam = 'https://api.github.com/orgs/tryber/repos';
    return getRepos(urlParam).then(response => {
      expect(response).toContain('sd-01-week4-5-project-meme-generator')
    })
  }, 10000);
});
