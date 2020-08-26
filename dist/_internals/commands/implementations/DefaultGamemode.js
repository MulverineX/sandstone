"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DefaultGamemode = void 0;
const Command_1 = require("@commands/Command");
const decorators_1 = require("@commands/decorators");
class DefaultGamemode extends Command_1.Command {
    constructor() {
        super(...arguments);
        this.defaultgamemode = (mode) => { };
    }
}
__decorate([
    decorators_1.command('defaultgamemode', { isRoot: true }),
    __metadata("design:type", Object)
], DefaultGamemode.prototype, "defaultgamemode", void 0);
exports.DefaultGamemode = DefaultGamemode;
//# sourceMappingURL=DefaultGamemode.js.map