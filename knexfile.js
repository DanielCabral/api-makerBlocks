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
        host: 'db4free.net',
        database: 'makerblocks',
        user:     'makerblocks',
        password: 'abc.1234'
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
        host: 'db4free.net',
        database: 'makerblocks',
        user:     'makerblocks',
        password: 'abc.1234'
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
        host: 'db4free.net',
        database: 'makerblocks',
        user:     'makerblocks',
        password: 'abc.1234'
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