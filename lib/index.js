"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
global.eventsRegister = [];
class SocketEvent {
    on(chanel, cb, key) {
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
    emit(chanel, data) {
        for (const ev of global.eventsRegister) {
            if (ev.chanel === chanel) {
                try {
                    ev.cb(data);
                }
                catch (error) {
                    console.error(`Error Chanel: ${chanel}`);
                    console.error(error);
                }
            }
        }
    }
    clear(chanel) {
        const newArr = [];
        for (const ev of global.eventsRegister) {
            if (ev.chanel !== chanel) {
                newArr.push(ev);
            }
        }
        global.eventsRegister = newArr;
    }
    clearAll() {
        global.eventsRegister = [];
    }
}
exports.default = new SocketEvent();
