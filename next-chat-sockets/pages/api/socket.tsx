import { Server } from 'socket.io';
import messageHandler from '../../utils/sockets/messageHandler';

export default async function SocketHandler(req, res) {
  // The socket server has already been initialized
  if (res.socket.server.io) {
    console.log('Server already set up');
    res.end();
    return;
  }

  const io = new Server(res.socket.server);
  res.socket.server.io = io; // Initialize the socket server

  // Callback function on connection
  const onConnection = (socket) => {
    messageHandler(io, socket);
  };

  io.on('connection', onConnection);

  console.log('Setting up the socket');
  res.end();
}
