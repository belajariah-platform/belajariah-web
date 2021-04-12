module.exports = {
  env: {
    development: {
      presets: [
        [
          'next/babel',
          {
            'preset-env': {
              modules: 'commonjs',
            },
          },
        ],
      ],
    },
    production: {
      presets: [
        [
          'next/babel',
          {
            'preset-env': {
              modules: 'commonjs',
            },
          },
        ],
      ],
    },
    test: {
      presets: ['@babel/env', '@babel/react'],
    },
  },
  plugins: [
    [
      'module-resolver',
      {
        root: ['./'],
        alias: {
          '~': './src',
          '~/pages': './src/pages',
          '~/static': './public/static',
        },
      },
    ],
  ],
}
