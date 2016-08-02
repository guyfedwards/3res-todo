const express = require('express');
const app = express();
const server = require('http').Server(app);
const path = require('path');
const io = require('socket.io')(server);
const r = require('rethinkdb');
require('rethinkdb-init')(r);
const config = require('./config');

const changefeedSocketEvents = require('./src/socket-events.js');

app.use(express.static('public'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/index.html'));
});

r.init(config.database, ['Todo'])
  .then((connection) => {
    io.on('connection', socket => {
      socket.on('todo:client:insert', todo => {
        r.table('Todo').insert(todo).run(connection);
      });

      socket.on('todo:client:update', todo => {
        const id = todo.id;
        delete todo.id;
        r.table('Todo').get(id).update(todo).run(connection);
      });

      socket.on('todo:client:delete', todo => {
        const id = todo.id;
        delete todo.id;
        r.table('Todo').get(id).delete().run(connection);
      });

      r.table('Todo').changes({ includeInitial: true, squash: true }).run(connection)
        .then(changefeedSocketEvents(socket, 'todo'));
    });

    server.listen(9000);
  })
  .catch(error => console.log('Error', error));
