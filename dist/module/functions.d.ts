import { IPasteOptions } from "./features/IPasteOptions";
import { IPasteStruct, RentryClient } from "rentry-pastebin";
export declare function createPaste(client: RentryClient, options?: IPasteOptions): Promise<IPasteStruct>;
