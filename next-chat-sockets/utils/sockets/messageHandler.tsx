// Handler that deals with a messager creating a message
export default (io, socket) => {
  const createdMessage = (msg) => {
    socket.broadcast.emit('newIncomingMessage', msg);
  };

  socket.on('createdMessage', createdMessage);
};
