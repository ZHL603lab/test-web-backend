"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
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
exports.QuestionsService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
const _ = require("lodash");
let QuestionsService = class QuestionsService {
  constructor(prismaService) {
    this.prismaService = prismaService;
  }
  randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  create(createQuestionDto) {
    return 'This action adds a new question';
  }
  findSome({
    subjectId,
    chapterId,
    num,
    order
  }) {
    var _this = this;
    return _asyncToGenerator(function* () {
      let data = yield _this.prismaService.question.findMany({
        where: {
          subjectId: subjectId,
          chapterId: chapterId
        }
      });
      if (order == 'random') data = _.shuffle(data);
      if (num) data = _.take(data, num);
      let res;
      data.map(item => {
        res.push({
          uuid: data
        });
      });
      return res;
    })();
  }
  findOne(uuid) {
    return this.prismaService.question.findFirst({
      where: {
        uuid
      }
    });
  }
  update(id, updateQuestionDto) {
    return `This action updates a #${id} question`;
  }
  remove(id) {
    return `This action removes a #${id} question`;
  }
};
QuestionsService = __decorate([(0, common_1.Injectable)(), __metadata("design:paramtypes", [prisma_service_1.PrismaService])], QuestionsService);
exports.QuestionsService = QuestionsService;