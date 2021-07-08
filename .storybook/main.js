const path = require('path');
module.exports = {
  babel: async (options) => ({
    ...options,

    plugins: ['@babel/plugin-proposal-class-properties', '@babel/plugin-proposal-private-methods'],
  }),
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
};
