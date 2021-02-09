# Socket Event for React

---

## Installation

```bash
yarn add react-socket-event
```

---

## Quick Start

```js
import SocketEvent from 'react-socket-event';

SocketEvent.on('my-event', (data) => {
    console.log(data);
});

SocketEvent.emit('my-event', 'hello, world');
```

```js
SocketEvent.clear('my-event'); //remove all listeners to 'my-event'

SocketEvent.clearAll(); //remove all listeners

SocketEvent.getAllListeners(); //return all listeners [{chanel, cb, key}]
```

# Overwrite repeated listeners

```js
import SocketEvent from 'react-socket-event';

SocketEvent.on(
    'my-event',
    (data) => {
        console.log(data);
    },
    'MY_UNIQUE_LISTENER'
);

// overwrites the previous listener avoiding multiple listeners
SocketEvent.on(
    'my-event',
    (data) => {
        console.log(data);
    },
    'MY_UNIQUE_LISTENER'
);

// will not overwrite
SocketEvent.on(
    'my-event',
    (data) => {
        console.log(data);
    },
    'MY_OTHER_LISTENER'
);

SocketEvent.emit('my-event', 'hello, world');
```
