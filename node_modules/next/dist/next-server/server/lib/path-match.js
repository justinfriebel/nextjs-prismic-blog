"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const pathToRegexp = __importStar(require("path-to-regexp"));
exports.pathToRegexp = pathToRegexp;
exports.default = (customRoute = false) => {
    return (path) => {
        const matcher = pathToRegexp.match(path, Object.assign(Object.assign({ sensitive: false, delimiter: '/' }, (customRoute ? { strict: true } : undefined)), { decode: decodeParam }));
        return (pathname, params) => {
            const res = pathname == null ? false : matcher(pathname);
            if (!res) {
                return false;
            }
            return Object.assign(Object.assign({}, params), res.params);
        };
    };
};
function decodeParam(param) {
    try {
        return decodeURIComponent(param);
    }
    catch (_) {
        const err = new Error('failed to decode param');
        // @ts-ignore DECODE_FAILED is handled
        err.code = 'DECODE_FAILED';
        throw err;
    }
}
