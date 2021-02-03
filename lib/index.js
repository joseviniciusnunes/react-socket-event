"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
global.eventsRegister = [];
function on(chanel, cb, key) {
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
function emit(chanel, data) {
    for (const ev of global.eventsRegister) {
        if (ev.chanel === chanel) {
            ev.cb(data);
        }
    }
}
function clear(chanel) {
    const newArr = [];
    for (const ev of global.eventsRegister) {
        if (ev.chanel !== chanel) {
            newArr.push(ev);
        }
    }
    global.eventsRegister = newArr;
}
exports.default = {
    on,
    emit,
    clear,
};
