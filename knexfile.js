module.exports = {

    // development: {
    //   client: 'sqlite3',
    //   connection: {
    //     filename: './src/database/db.sqlite'
    //   },
    //   migrations:{
    //       directory:"./src/database/migrations"
    //   },
    //   useNullAsDefault: true
    // },
    development: {
      client: 'mysql',
      connection: {
        host: 'us-cdbr-east-02.cleardb.com',
        database: 'heroku_2b58cdacaab391e',
        user:     'bb3f30639486b2',
        password: '862c56b8'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations:{
          directory:"./src/database/migrations"
      },
      useNullAsDefault: true
    },
    staging: {
      client: 'mysql',
      connection: {
        host: 'us-cdbr-east-02.cleardb.com',
        database: 'heroku_2b58cdacaab391e',
        user:     'bb3f30639486b2',
        password: '862c56b8'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations:{
          directory:"./src/database/migrations"
      },
      useNullAsDefault: true
    },
  
    production: {
      client: 'mysql',
      connection: {
        host: 'us-cdbr-east-02.cleardb.com',
        database: 'heroku_2b58cdacaab391e',
        user:     'bb3f30639486b2',
        password: '862c56b8'
      },
      pool: {
        min: 2,
        max: 10
      },
      migrations:{
          directory:"./src/database/migrations"
      },
      useNullAsDefault: true
    },
  
  };