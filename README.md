<p align="center">
  <img src="https://user-images.githubusercontent.com/22475804/142086991-13c347cc-022b-4a6e-8d16-03d1ab210467.png" height="200px" />
  <h1 align="center">Socket Event for React</h1>
</p>

<br />

### An easy way to create and call events within your React application.

---

## Installation

```bash
yarn add react-socket-event
```

---

## Quick Start

```js
import SocketEvent from 'react-socket-event';

useEffect(() => {
    const removeListener = SocketEvent.on('my-event', (data) => {
        console.log(data);
    });

    return removeListener; //remove listener on unmount the component
}, []);

SocketEvent.emit('my-event', 'hello, world');
```

```js
SocketEvent.clear('my-event'); //remove all listeners to 'my-event'

SocketEvent.clearAll(); //remove all listeners

SocketEvent.getAllListeners(); //return all listeners [{id, chanel, cb, key}]
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
