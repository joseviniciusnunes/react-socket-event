import SocketEvent from '../src';


SocketEvent.on('my-event',  (data) => {
    console.log(data)
});

SocketEvent.emit('my-event', 'hello, world');

process.exit(0)
