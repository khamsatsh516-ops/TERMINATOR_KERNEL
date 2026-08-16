module.exports = {
  apps: [
    {
      name: "king-terminator",
      script: "index.js",
      watch: false,
      autorestart: true,
      restart_delay: 5000,
      max_memory_restart: "500M",
      env: {
        NODE_ENV: "production",
      },
      error_file: "./logs/err.log",
      out_file: "./logs/out.log",
      log_date_format: "YYYY-MM-DD HH:mm:ss"
    }
  ]
};
