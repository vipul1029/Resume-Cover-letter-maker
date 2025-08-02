module.exports = {
  '*.{js,jsx,ts,tsx}': [
    'eslint --fix',
    'prettier --write',
    'git add'
  ],
  '*.{css,scss,html,json,md}': [
    'prettier --write',
    'git add'
  ]
};
