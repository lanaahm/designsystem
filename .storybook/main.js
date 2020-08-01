const path = require('path');

module.exports = {
  stories: ['../components/**/*.{story,stories}.{ts,tsx,js,jsx}'],
  addons: [
    '@storybook/addon-actions',
    '@storybook/addon-knobs',
    '@storybook/addon-links',
    '@storybook/addon-notes',
    '@storybook/addon-a11y',
    'storybook-addon-jsx/',
  ],
  webpackFinal: (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)?$/,
      use: [{
        loader: require.resolve('babel-loader'),
        options: {
          presets: [
            ['react-app', {
              flow: false,
              typescript: true
            }]
          ],
        },
      }],
      include: path.resolve(__dirname, '..'),
    });

    config.resolve.extensions.push('.ts', '.tsx');
    config.resolve.mainFields = ['browser', 'module', 'main'];
    return config;
  },
};