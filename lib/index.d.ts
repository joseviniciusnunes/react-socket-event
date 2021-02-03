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
declare function on(chanel: string, cb: (data: any) => void, key?: string): void;
declare function emit(chanel: string, data?: any): void;
declare function clear(chanel: string): void;
declare const _default: {
    on: typeof on;
    emit: typeof emit;
    clear: typeof clear;
};
export default _default;
