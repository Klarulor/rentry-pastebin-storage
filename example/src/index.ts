//import {createPastebin, PastebinClient} from "pastebin-storage";

import {createPaste, PastebinStorage} from "../../dist";
import {RentryClient} from "rentry-pastebin";


(async () => {
    //Create client NOTICE: NOT PASTEBIN.COM CLIENT!!!!!!!!! IS https://rentry.co/ CLIENT!!!!!!!!!!!!!!!!!!!
    const client = new RentryClient();
    await client.createToken() //Create token for interaction
    //Create storage
    const storage = new PastebinStorage(client);
    //Create new paste
    const paste = await createPaste(client, {name: "testEx", description: "idk"}); // or await storage.usePaste({link: "ozmxs", editCode: "8futwQti"});

    // Setup paste for storage
    await storage.usePaste(paste);

    console.log(`Paste is: ${storage.getPasteId()}`);
    // update
    await storage.updateField("firstname", "Klarulor");
    // get
    const firstname = await storage.getField("firstname");
    console.log(`Firstname is: ${firstname}`);
})();



