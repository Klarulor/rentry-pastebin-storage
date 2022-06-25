"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PastebinStorage = void 0;
const rentry_pastebin_1 = require("rentry-pastebin");
class PastebinStorage {
    constructor(client) {
        this.getPasteId = () => this.id;
        this.client = client || new rentry_pastebin_1.RentryClient();
    }
    usePaste(paste) {
        return __awaiter(this, void 0, void 0, function* () {
            const obj = paste;
            if (obj.link && obj.editCode) {
                const createStruct = paste;
                this.id = createStruct.link;
                this.paste = yield rentry_pastebin_1.Paste.fetch(this.client, this.id, createStruct.editCode);
            }
            else if (obj.url && obj.editCode && !obj.content) {
                const pasteStruct = paste;
                this.id = pasteStruct.url;
                this.paste = yield rentry_pastebin_1.Paste.fetch(this.client, this.id, pasteStruct.editCode);
            }
            else {
                const pasteStruct = paste;
                this.id = pasteStruct.getLink();
                this.paste = pasteStruct;
            }
        });
    }
    auth() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.client.createToken();
        });
    }
    getField(key = "__main") {
        return new Promise((done) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.client.getPaste(this.id);
            let json = JSON.parse(data);
            if (key != "__main")
                done(json.content[key]);
            else
                done(json.content);
        }));
    }
    updateField(key = "__main", value) {
        return new Promise((done) => __awaiter(this, void 0, void 0, function* () {
            const data = yield this.client.getPaste(this.id);
            let json = JSON.parse(data);
            if (key != "__main")
                json.content[key] = value;
            else
                json.content = value;
            yield this.paste.setContentAsync(JSON.stringify(json, null, "\t"));
            done();
        }));
    }
}
exports.PastebinStorage = PastebinStorage;
//# sourceMappingURL=PastebinStorage.js.map