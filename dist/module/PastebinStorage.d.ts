import { RentryClient, IPasteStruct, Paste } from "rentry-pastebin";
import { IPasteCreateStruct } from "./features/IPasteCreateStruct";
import { IEncodingPasteStruct } from "./features/IEncodingPasteStruct";
export declare class PastebinStorage {
    private client;
    private id;
    private paste;
    private encoding;
    constructor(client?: RentryClient);
    usePaste(paste?: IPasteCreateStruct | Paste | IPasteStruct, encoding?: IEncodingPasteStruct): Promise<void>;
    auth(): Promise<void>;
    getPasteId: () => string;
    getField(key?: any): Promise<any>;
    updateField(key: any, value: any): Promise<void>;
}
