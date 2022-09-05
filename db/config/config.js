module.exports = {
  development: {
    username: process.env.NEXT_PUBLIC_DB_USER,
    password: process.env.NEXT_PUBLIC_DB_PASS,
    database: process.env.NEXT_PUBLIC_DB_NAME,
    host: process.env.NEXT_PUBLIC_DB_HOST,
    dialect: process.env.NEXT_PUBLIC_DIALECT,
  },
  test: {
    username: process.env.NEXT_PUBLIC_DB_USER,
    password: process.env.NEXT_PUBLIC_DB_PASS,
    database: process.env.NEXT_PUBLIC_DB_NAME,
    host: process.env.NEXT_PUBLIC_DB_HOST,
    dialect: process.env.NEXT_PUBLIC_DIALECT,
    logging: false,
  },
  production: {
    username: process.env.NEXT_PUBLIC_DB_USER,
    password: process.env.NEXT_PUBLIC_DB_PASS,
    database: process.env.NEXT_PUBLIC_DB_NAME,
    host: process.env.NEXT_PUBLIC_DB_HOST,
    dialect: process.env.NEXT_PUBLIC_DIALECT,
    logging: true,
  },
}
