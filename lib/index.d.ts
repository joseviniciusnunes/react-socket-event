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
declare class SocketEvent {
    on(chanel: string, cb: (data: any) => void, key?: string): void;
    emit(chanel: string, data?: any): void;
    clear(chanel: string): void;
    clearAll(): void;
    getAllListeners(): EventEmit[];
}
declare const _default: SocketEvent;
export default _default;
