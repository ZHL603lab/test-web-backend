import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { PrismaService } from '../prisma/prisma.service';
import * as _ from 'lodash';
import * as diagnostics_channel from "diagnostics_channel";

@Injectable()
export class QuestionsService {
  constructor(private readonly prismaService: PrismaService) {}

  randomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  create(createQuestionDto: CreateQuestionDto) {
    return 'This action adds a new question';
  }

  async findSome({ subjectId, chapterId, num, order }: { subjectId: string; chapterId: string; num: number; order: string }) {
    let res = await this.prismaService.question.findMany({
      where: {
        subjectId: subjectId,
        chapterId: chapterId,
      }
    });

    if (order == 'random') res = _.shuffle(res);
    if (num) res = _.take(res, num);

    return res;
  }

  findOne(uuid: string) {
    return this.prismaService.question.findFirst({
      where: { uuid }
    });
  }

  update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return `This action updates a #${id} question`;
  }

  remove(id: number) {
    return `This action removes a #${id} question`;
  }
}
