export default () => ({
  PORT: parseInt(process.env.PORT, 10) || 3333,
  HOST: process.env.HOST || 'localhost',
});
