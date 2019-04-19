module.exports = {
  apps: [
    {
      name: 'jr-posts-app',
      script: './src/index.js',
      env_production: {
        NODE_ENV: 'production'
      }
    }
  ]
};
