"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseDate = void 0;
const parseDate = function parseDate(dateString) {
    const parsedDate = new Date(dateString);
    if (isNaN(parsedDate.getTime())) {
        return null;
    }
    return parsedDate;
};
exports.parseDate = parseDate;
//# sourceMappingURL=dateParser.js.map