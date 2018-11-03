module.exports = {
  presets: [['@vue/app', { loose: true }]],
  plugins: [
    ['lodash'],
    ['@babel/plugin-proposal-optional-chaining'],
    ['@babel/plugin-proposal-numeric-separator'],
    ['@babel/plugin-proposal-throw-expressions'],
    ['@babel/plugin-proposal-nullish-coalescing-operator'],
    ['@babel/plugin-proposal-logical-assignment-operators'],
    ['@babel/plugin-proposal-function-sent'],
    ['@babel/plugin-proposal-function-bind'],
    ['@babel/plugin-proposal-export-namespace-from'],
    ['@babel/plugin-proposal-export-default-from'],
    ['@babel/plugin-proposal-do-expressions'],
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    ['@babel/plugin-proposal-pipeline-operator', { proposal: 'minimal' }],
  ],
}
