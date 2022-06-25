import { IPasteOptions } from "./features/IPasteOptions";
import { IPasteStruct, RentryClient } from "rentry-pastebin";
import { IEncodingPasteStruct } from "./features/IEncodingPasteStruct";
export declare function createPaste(client: RentryClient, options?: IPasteOptions, encoding?: IEncodingPasteStruct): Promise<IPasteStruct>;
