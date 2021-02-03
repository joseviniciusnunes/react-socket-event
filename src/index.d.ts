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

export default global;
