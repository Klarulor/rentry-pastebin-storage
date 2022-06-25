import { RentryClient, IPasteStruct, Paste } from "rentry-pastebin";
import { IPasteCreateStruct } from "./features/IPasteCreateStruct";
export declare class PastebinStorage {
    private client;
    private id;
    private paste;
    constructor(client?: RentryClient);
    usePaste(paste?: IPasteCreateStruct | Paste | IPasteStruct): Promise<void>;
    auth(): Promise<void>;
    getPasteId: () => string;
    getField(key?: any): Promise<any>;
    updateField(key: any, value: any): Promise<void>;
}
