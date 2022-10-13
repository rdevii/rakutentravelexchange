export default {
    HOST: "localhost",
    USER: "postgres",
    PASSWORD: "admin",
    DB: "hotelsdb",
    dialect: "postgres",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };