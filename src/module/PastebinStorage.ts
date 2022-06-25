import {RentryClient, IPasteStruct, Paste} from "rentry-pastebin";
import {IPasteCreateStruct} from "./features/IPasteCreateStruct";


export class PastebinStorage{
    private client: RentryClient;
    private id: string;
    private paste: Paste;
    constructor(client?: RentryClient) {
        this.client = client || new RentryClient();

    }
    public async usePaste(paste?: IPasteCreateStruct | Paste | IPasteStruct): Promise<void>{
        const obj = paste as any;
        if(obj.link && obj.editCode) {
            const createStruct = paste as IPasteCreateStruct;
            this.id = createStruct.link;
            this.paste = await Paste.fetch(this.client, this.id, createStruct.editCode);
        }else if(obj.url && obj.editCode && !obj.content){
            const pasteStruct = paste as IPasteStruct;
            this.id = pasteStruct.url;
            this.paste = await Paste.fetch(this.client, this.id, pasteStruct.editCode);
        }else{
            const pasteStruct = paste as Paste;
            this.id = pasteStruct.getLink();
            this.paste = pasteStruct;
        }
    }
    public async auth(): Promise<void>{
        await this.client.createToken();
    }

    public getPasteId = () => this.id;

    public getField(key: any = "__main"): Promise<any>{
        return new Promise<any>(async done => {
            const data = await this.client.getPaste(this.id);
            let json = JSON.parse(data);
            if(key != "__main")
                done(json.content[key]);
            else
                done(json.content);

        });
    }
    public updateField(key: any = "__main", value: any): Promise<void>{
        return new Promise(async done => {
            const data = await this.client.getPaste(this.id);
            let json = JSON.parse(data);
            if(key != "__main")
                json.content[key] = value;
            else
                json.content = value;
            await this.paste.setContentAsync(JSON.stringify(json, null, "\t"));
            done();


        });
    }
}