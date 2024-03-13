const { Server } = require('./src/Server');
const { PORT = 3000, HOST = 'localhost' } = process.env;

(async () => {
  const server = new Server();
  server.listen({ port: PORT, host: HOST }, () => {
    console.log(`🚀 Frontend ready at ${HOST}:${PORT}`);
  });
})();
