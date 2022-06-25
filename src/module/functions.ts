import {IPasteOptions} from "./features/IPasteOptions";
import {IPasteStruct, RentryClient} from "rentry-pastebin";

const defaultBody = {
    name: "nothing",
    description: "nothing",
    content: {}
};

function modifyBody(options: IPasteOptions): any{
    let body = defaultBody;
    body.name = options.name;
    body.description = options.description;
    body.content = options.content ?? {};
    return body
}

export function createPaste(client: RentryClient, options?: IPasteOptions): Promise<IPasteStruct>{
    return new Promise(async (res, rej) => {
        let body = options ? modifyBody(options) : defaultBody;
        //let code = await client.createPaste({publicity: isPrivate ? Publicity.Private : Publicity.Public, code: JSON.stringify(body, null, "\t")});
        const data = await client.createPaste({content: JSON.stringify(body, null, "\t")});
        res(data);

    });
}