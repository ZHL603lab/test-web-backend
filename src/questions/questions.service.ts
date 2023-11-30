import { Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { UpdateQuestionDto } from './dto/update-question.dto';
import { PrismaService } from '../prisma/prisma.service';
import * as _ from 'lodash';
import * as diagnostics_channel from 'diagnostics_channel';
import { Question, rawQuestion } from './entities/question.entity';
import { handleRetry } from '@nestjs/typeorm';

@Injectable()
export class QuestionsService {
  constructor(private readonly prismaService: PrismaService) {}

  randomNumber(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  create(createQuestionDto: CreateQuestionDto) {
    return 'This action adds a new question';
  }

  async findSome({
    subjectId,
    chapterId,
    num,
    order,
  }: {
    subjectId: string;
    chapterId: string;
    num: number;
    order: string;
  }) {

    let data: rawQuestion[] = await this.prismaService.question.findMany({
      where: {
        subjectId: subjectId,
        chapterId: chapterId,
      },
    });

    if (order == 'random') data = _.shuffle(data);
    if (num) data = _.take(data, num);

    let res: Question[] = [];

    data.map((item: rawQuestion) => {
      const handleSelects = (item: rawQuestion) => {
        let selects: { id: string, text: string }[] = [];
        if (item.selectA && item.selectA != "") {
          selects.push({ id: 'A', text: item.selectA });
        }
        if (item.selectB && item.selectB != "") {
          selects.push({ id: 'B', text: item.selectB });
        }
        if (item.selectC && item.selectC != "") {
          selects.push({ id: 'C', text: item.selectC });
        }
        if (item.selectD && item.selectD != "") {
          selects.push({ id: 'D', text: item.selectD });
        }
        if (item.selectE && item.selectE != "") {
          selects.push({ id: 'E', text: item.selectE });
        }
        if (item.selectF && item.selectF != "") {
          selects.push({ id: 'F', text: item.selectF });
        }
        return selects;
      }

      res.push({
        uuid: item.uuid,
        subjectId: item.subjectId,
        chapterId: item.chapterId,
        body: item.body,
        type: item.type,
        answer: item.answer,
        explain: item.explain,
        selects: handleSelects(item),
        sort: item.sort,
        state: item.state,
      });
    });

    return res;
  }

  findOne(uuid: string) {
    return this.prismaService.question.findFirst({
      where: { uuid },
    });
  }

  update(id: number, updateQuestionDto: UpdateQuestionDto) {
    return `This action updates a #${id} question`;
  }

  remove(id: number) {
    return `This action removes a #${id} question`;
  }
}
