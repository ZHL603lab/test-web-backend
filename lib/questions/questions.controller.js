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
var __param = void 0 && (void 0).__param || function (paramIndex, decorator) {
  return function (target, key) {
    decorator(target, key, paramIndex);
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.QuestionsController = void 0;
const common_1 = require("@nestjs/common");
const questions_service_1 = require("./questions.service");
const create_question_dto_1 = require("./dto/create-question.dto");
const update_question_dto_1 = require("./dto/update-question.dto");
let QuestionsController = class QuestionsController {
  constructor(questionsService) {
    this.questionsService = questionsService;
  }
  create(createQuestionDto) {
    return this.questionsService.create(createQuestionDto);
  }
  findSome(subjectId, chapterId, order, num) {
    if (chapterId == "") chapterId = undefined;
    if (subjectId == "") subjectId = undefined;
    if (chapterId && !subjectId) {
      throw new common_1.HttpException("没有包含 _isubjectId 但是包含了 chapter_id", 403);
    }
    return this.questionsService.findSome({
      subjectId,
      chapterId,
      order,
      num
    });
  }
  findOne(uuid) {
    return this.questionsService.findOne(uuid);
  }
  update(id, updateQuestionDto) {
    return this.questionsService.update(+id, updateQuestionDto);
  }
  remove(id) {
    return this.questionsService.remove(+id);
  }
};
__decorate([(0, common_1.Post)(), __param(0, (0, common_1.Body)()), __metadata("design:type", Function), __metadata("design:paramtypes", [create_question_dto_1.CreateQuestionDto]), __metadata("design:returntype", void 0)], QuestionsController.prototype, "create", null);
__decorate([(0, common_1.Get)(), __param(0, (0, common_1.Query)('subject_id')), __param(1, (0, common_1.Query)('chapter_id')), __param(2, (0, common_1.Query)('order')), __param(3, (0, common_1.Query)('num', common_1.ParseIntPipe)), __metadata("design:type", Function), __metadata("design:paramtypes", [String, String, String, Number]), __metadata("design:returntype", void 0)], QuestionsController.prototype, "findSome", null);
__decorate([(0, common_1.Get)(':uuid'), __param(0, (0, common_1.Param)('uuid')), __metadata("design:type", Function), __metadata("design:paramtypes", [String]), __metadata("design:returntype", void 0)], QuestionsController.prototype, "findOne", null);
__decorate([(0, common_1.Patch)(':id'), __param(0, (0, common_1.Param)('id')), __param(1, (0, common_1.Body)()), __metadata("design:type", Function), __metadata("design:paramtypes", [String, update_question_dto_1.UpdateQuestionDto]), __metadata("design:returntype", void 0)], QuestionsController.prototype, "update", null);
__decorate([(0, common_1.Delete)(':id'), __param(0, (0, common_1.Param)('id')), __metadata("design:type", Function), __metadata("design:paramtypes", [String]), __metadata("design:returntype", void 0)], QuestionsController.prototype, "remove", null);
QuestionsController = __decorate([(0, common_1.Controller)('questions'), __metadata("design:paramtypes", [questions_service_1.QuestionsService])], QuestionsController);
exports.QuestionsController = QuestionsController;