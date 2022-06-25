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
exports.createPaste = void 0;
const defaultBody = {
    name: "nothing",
    description: "nothing",
    content: {}
};
function modifyBody(options) {
    var _a;
    let body = defaultBody;
    body.name = options.name;
    body.description = options.description;
    body.content = (_a = options.content) !== null && _a !== void 0 ? _a : {};
    return body;
}
function createPaste(client, options) {
    return new Promise((res, rej) => __awaiter(this, void 0, void 0, function* () {
        let body = options ? modifyBody(options) : defaultBody;
        //let code = await client.createPaste({publicity: isPrivate ? Publicity.Private : Publicity.Public, code: JSON.stringify(body, null, "\t")});
        const data = yield client.createPaste({ content: JSON.stringify(body, null, "\t") });
        res(data);
    }));
}
exports.createPaste = createPaste;
//# sourceMappingURL=functions.js.map