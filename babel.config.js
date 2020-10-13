module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            assets: './assets',
            _atoms: './src/components/atoms',
            _molecules: './src/components/molecules',
            _organisms: './src/components/organisms',
            _navigations: './src/navigations',
            _screens: './src/screens',
            _styles: './src/styles',
            _images: './src/assets/images',
            _icons: './src/assets/icons',
            _graphql: './src/graphql',
          },
        },
      ],
    ],
  }
}
