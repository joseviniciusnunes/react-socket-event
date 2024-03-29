declare global {
    var eventsRegister: EventEmit[];
}

interface EventEmit {
    id: string;
    chanel: string;
    cb: (data: any) => void;
    key?: string;
}

globalThis.eventsRegister = [];

function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        var r = (Math.random() * 16) | 0,
            v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}

function removeListenerId(id: string) {
    const newArr = [];
    for (const ev of globalThis.eventsRegister) {
        if (ev.id !== id) {
            newArr.push(ev);
        }
    }
    globalThis.eventsRegister = newArr;
}

function on(chanel: string, cb: (data: any) => void, key?: string) {
    for (let index = 0; index < globalThis.eventsRegister.length; index++) {
        const ev = globalThis.eventsRegister[index];
        if (ev.chanel === chanel && ev.key !== undefined && ev.key === key) {
            globalThis.eventsRegister.splice(index, 1);
            break;
        }
    }
    const id = uuidv4();
    globalThis.eventsRegister.push({
        id,
        chanel,
        cb,
        key,
    });
    return () => removeListenerId(id);
}

function emit(chanel: string, data?: any) {
    for (const ev of globalThis.eventsRegister) {
        if (ev.chanel === chanel) {
            try {
                (async () => await ev.cb(data))();
            } catch (error) {
                console.error(`Error Chanel: ${chanel}`);
                console.error(error);
            }
        }
    }
}

function clear(chanel: string) {
    const newArr = [];
    for (const ev of globalThis.eventsRegister) {
        if (ev.chanel !== chanel) {
            newArr.push(ev);
        }
    }
    globalThis.eventsRegister = newArr;
}

function clearAll() {
    globalThis.eventsRegister = [];
}

function getAllListeners() {
    return globalThis.eventsRegister;
}

const SocketEvent = {
    on,
    emit,
    clear,
    clearAll,
    getAllListeners,
};

export default SocketEvent;
