module.exports = {
  presets: ['module:@react-native/babel-preset'],
};
module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@assets': './src/assets',
          '@theme': './src/theme',
          '@utils': './src/utils',
          '@api': './src/api',
        },
      },
    ],
  ],
};