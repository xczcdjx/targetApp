module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.ios.jsx', '.android.jsx', '.js', '.jsx', '.json', '.ts', '.tsx'],
        root: ['.'],
        alias: {
          '@/api': './src/api',
          '@/assets': './src/assets',
          '@/components': './src/components',
          '@/layout': './src/layout',
          '@/constants': './src/constants',
          '@/utils': './src/utils',
          '@/images': './src/static/images',
        },
      },
    ]
  ],
};
