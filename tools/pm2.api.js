const { resolve } = require('path');
module.exports = {
  apps: [
    {
      name: 'api',
      script: 'dist/apps/api/main.js',
      // out_file: `${process.cwd()}/logs/pm2/demo-api.log`,
      // error_file: `${process.cwd()}/logs/pm2/demo-api.log`,
      // Options reference: https://pm2.keymetrics.io/docs/usage/application-declaration/
      args: 'one two',
      instances: 4,
      exec_mode: 'cluster', //"cluster",
      autorestart: true,
      watch: false,
      listen_timeout: 3000, //graceful start timeout
      kill_timeout: 3000, //graceful stop timeout
      max_memory_restart: '1G',
      output: './log/out.log', // not for production !!
      error: './log/error.log',
      log: './log/combined.log',
      merge_logs: false, //for cluster mode..
      //log_type : 'json',
      env: {
        log_date_format: 'DD-MM-YYYY',
        NODE_ENV: 'development',
      },
      env_test: {
        NODE_ENV: 'test',
      },
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
