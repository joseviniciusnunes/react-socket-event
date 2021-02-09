import SocketEvent from '../src';

const removeListener = SocketEvent.on('my-event', (data) => {
    console.log(data);
});

SocketEvent.on('my-event', (data) => {
    console.log(data);
});

SocketEvent.emit('my-event', 'hello, world');

console.log(SocketEvent.getAllListeners());

removeListener();

console.log(SocketEvent.getAllListeners());

process.exit(0);
