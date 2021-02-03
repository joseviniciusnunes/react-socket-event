declare global {
    namespace NodeJS {
        interface Global {
            eventsRegister: EventEmit[];
        }
    }
}

interface EventEmit {
    chanel: string;
    cb: (data: any) => void;
    key?: string;
}

global.eventsRegister = [];

function on(chanel: string, cb: (data: any) => void, key?: string) {
    for (let index = 0; index < global.eventsRegister.length; index++) {
        const ev = global.eventsRegister[index];
        if (ev.chanel === chanel && ev.key !== undefined && ev.key === key) {
            global.eventsRegister.splice(index, 1);
            break;
        }
    }
    global.eventsRegister.push({
        chanel,
        cb,
        key,
    });
}

function emit(chanel: string, data?: any) {
    for (const ev of global.eventsRegister) {
        if (ev.chanel === chanel) {
            ev.cb(data);
        }
    }
}

function clear(chanel: string) {
    const newArr = [];
    for (const ev of global.eventsRegister) {
        if (ev.chanel !== chanel) {
            newArr.push(ev);
        }
    }
    global.eventsRegister = newArr;
}

export default {
    on,
    emit,
    clear,
};
