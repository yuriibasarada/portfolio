module.exports = {
  apps: [
    {
      name: 'yuriibasarada.com',
      script: 'npm',
      args: 'start',
      env_staging: {
        API: 'staging',
        NODE_ENV: 'production',
        PORT: 3000,
      },
    },
  ],
};