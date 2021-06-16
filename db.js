const Sequelize = require('sequelize')

var reconnectOptions = {
    max_retries: 999,
    onRetry: function(count) {
      console.log("connection lost, trying to reconnect ("+count+")");
    }
  };

const sequelize = new Sequelize('clinic', 'root', 'root', {
    host: 'mysqldb',
    dialect: 'mysql',
    port: '3306',
    operatorsAliases: 0,
    timezone: '+08:00',

    reconnect: reconnectOptions || true,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 1
    }
})

sequelize
    .authenticate()
    .then(() => {
        result = {
            status: "success",
            message: "Connection has been established successfully."
        };
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        result = {
            status: "fail",
            message: "Unable to connect to the database: \n " + err
        };
        console.log('Unable to connect to the database: \n ' , err);
    });

module.exports = sequelize 