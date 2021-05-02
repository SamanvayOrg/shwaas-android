module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    production: {
      plugins: [['react-native-paper/babel'], ['module:react-native-dotenv']],
    },
  },
};
