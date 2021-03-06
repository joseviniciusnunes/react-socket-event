"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
global.eventsRegister = [];
function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        var r = (Math.random() * 16) | 0, v = c == 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
function removeListenerId(id) {
    const newArr = [];
    for (const ev of global.eventsRegister) {
        if (ev.id !== id) {
            newArr.push(ev);
        }
    }
    global.eventsRegister = newArr;
}
class SocketEvent {
    on(chanel, cb, key) {
        for (let index = 0; index < global.eventsRegister.length; index++) {
            const ev = global.eventsRegister[index];
            if (ev.chanel === chanel && ev.key !== undefined && ev.key === key) {
                global.eventsRegister.splice(index, 1);
                break;
            }
        }
        const id = uuidv4();
        global.eventsRegister.push({
            id,
            chanel,
            cb,
            key,
        });
        return () => removeListenerId(id);
    }
    emit(chanel, data) {
        const promisesResolve = [];
        for (const ev of global.eventsRegister) {
            if (ev.chanel === chanel) {
                try {
                    (() => __awaiter(this, void 0, void 0, function* () { return yield ev.cb(data); }))();
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
    getAllListeners() {
        return global.eventsRegister;
    }
}
exports.default = new SocketEvent();
