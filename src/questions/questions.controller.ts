import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
  ParseIntPipe,
  Res,
  HttpException,
  ParseBoolPipe,
} from '@nestjs/common';
import { QuestionsService } from './questions.service';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { toNumber } from 'lodash';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionsService: QuestionsService) {}

  @Post()
  create(@Body() createQuestionDto: CreateQuestionDto) {
    return this.questionsService.create(createQuestionDto);
  }

  @Get()
  findSome(
    @Query('subject_id') subjectId: string,
    @Query('chapter_id') chapterId: string,
    @Query('order') order: string,
    @Query('num', ParseIntPipe) num: number,
  ) {
    if (chapterId == '') chapterId = undefined;
    if (subjectId == '') subjectId = undefined;

    if (chapterId && !subjectId) {
      throw new HttpException(
        '没有包含 _isubjectId 但是包含了 chapter_id',
        403,
      );
    }
    return this.questionsService.findSome({ subjectId, chapterId, order, num });
  }

  @Get(':uuid')
  findOne(@Param('uuid') uuid: string) {
    return this.questionsService.findOne(uuid);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateQuestionDto: UpdateQuestionDto,
  ) {
    return this.questionsService.update(+id, updateQuestionDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.questionsService.remove(+id);
  }
}
