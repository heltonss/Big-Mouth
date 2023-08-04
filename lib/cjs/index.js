"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = exports.OperationSystem = exports.Browser = void 0;
const index_1 = __importDefault(require("./services/browser/index"));
exports.Browser = index_1.default;
const index_2 = __importDefault(require("./services/os/index"));
exports.OperationSystem = index_2.default;
const index_3 = __importDefault(require("./services/user/index"));
exports.User = index_3.default;
