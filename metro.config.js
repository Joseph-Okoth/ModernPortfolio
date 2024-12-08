const { getDefaultConfig } = require('metro-config');

module.exports = (async () => {
  const {
    resolver: { sourceExts, assetExts }
  } = await getDefaultConfig();

  return {
    transformer: {
      babelTransformerPath: require.resolve('react-native-svg-transformer'),
      getTransformOptions: async () => ({
        transform: {
          experimentalImportSupport: false,
          inlineRequires: true,
        },
      }),
      assetPlugins: ['react-native-svg-asset-plugin'],
    },
    resolver: {
      assetExts: assetExts.filter(ext => ext !== 'svg'),
      sourceExts: [...sourceExts, 'svg', 'cjs', 'json'],
      extraNodeModules: {
        '@components': './src/components',
        '@screens': './src/screens',
        '@assets': './src/assets',
        '@theme': './src/theme',
        '@utils': './src/utils',
        '@api': './src/api',
        '@hooks': './src/hooks',
        '@types': './src/types',
        '@constants': './src/constants',
      }
    },
    watchFolders: ['.'],
  };
})();