declare global {
    namespace NodeJS {
        interface Global {
            eventsRegister: EventEmit[];
        }
    }
}
interface EventEmit {
    id: string;
    chanel: string;
    cb: (data: any) => void;
    key?: string;
}
declare function on(chanel: string, cb: (data: any) => void, key?: string): () => void;
declare function emit(chanel: string, data?: any): void;
declare function clear(chanel: string): void;
declare function clearAll(): void;
declare function getAllListeners(): EventEmit[];
declare const SocketEvent: {
    on: typeof on;
    emit: typeof emit;
    clear: typeof clear;
    clearAll: typeof clearAll;
    getAllListeners: typeof getAllListeners;
};
export default SocketEvent;
