module.exports = ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: {
      host: env('DATABASE_HOST', '162.241.60.205'),
      port: env.int('DATABASE_PORT', 3306),
      database: env('DATABASE_NAME', 'pymecomm_temoib'),
      user: env('DATABASE_USERNAME', 'pymecomm_temoib'),
      password: env('DATABASE_PASSWORD', 'Adqdisp06ERV'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
