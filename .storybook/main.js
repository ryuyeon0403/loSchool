module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: '@storybook/react',
  //스토리북의 Emotion기능 제외
  features: {
    emotionAlias: false,
  },
  core: {
    builder: '@storybook/builder-webpack5',
  },
}
