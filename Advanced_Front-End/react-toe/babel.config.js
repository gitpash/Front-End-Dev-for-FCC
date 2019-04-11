// {
//   "presets": [
//     "@babel/preset-env",
//     "@babel/preset-react"
//     // ["env", {"modules": false}],
//     // // webpack understands the native import syntax, and uses it for tree shaking
//     // "stage-1",
//     // "react"
//     // // Transpile React components to JavaScript
//   ],
//   "plugins": [
//     "react-hot-loader/babel"
//     // Enables React code to work with HMR.
//   ]
// }
/* eslint-disable */
module.exports = function(api) {
  api.cache(true);

  const presets = [
    '@babel/preset-env',
    '@babel/preset-react',
  ];
  const plugins = ['react-hot-loader/babel', '@babel/plugin-proposal-class-properties'];

  return {
    presets,
    plugins,
  };
};
