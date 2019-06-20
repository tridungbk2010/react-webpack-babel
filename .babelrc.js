const presets = [
  [
    '@babel/preset-env',
    {
      modules: false,
    },
  ],
  '@babel/preset-react',
];
const plugins = [
  'react-hot-loader/babel',
  [
    'babel-plugin-styled-components',
    {
      pure: true,
    },
  ],
];

module.exports = { presets, plugins };
