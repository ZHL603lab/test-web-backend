"use strict";

var __decorate = void 0 && (void 0).__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = void 0 && (void 0).__metadata || function (k, v) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PrismaService = void 0;
const client_1 = require("@prisma/client");
const common_1 = require("@nestjs/common");
let PrismaService = class PrismaService extends client_1.PrismaClient {
  constructor() {
    super();
  }
};
PrismaService = __decorate([(0, common_1.Injectable)(), __metadata("design:paramtypes", [])], PrismaService);
exports.PrismaService = PrismaService;