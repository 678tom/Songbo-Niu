const { join, resolve } = require('path');
var connect = require('../../api/src/dbFuncs/connect.js');
const staticPath = join(resolve(process.cwd()), 'build');

function Server() {
  const server = connect();

  server.get('/alive', (_req, res) => {
    res.json({ status: 'ok' });
  });

  server.get('/ready', (_req, res) => {
    res.json({ status: 'ready' });
  });

  server.use('/', connect.static(staticPath));

  server.get('*', (_req, res) => {
    res.sendFile(resolve(join('build', 'index.html')));
  });

  return server;
}

module.exports.Server = Server;
