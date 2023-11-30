// export class Question {}

export type rawQuestion = {
  uuid: string;
  subjectId: string;
  chapterId: string;
  body: string;
  type: string;
  answer: string;
  explain: string;
  selectA: string;
  selectB: string;
  selectC: string;
  selectD: string;
  selectE: string;
  selectF: string;
  sort: number;
  state: string;
};

export type Question = {
  uuid: string;
  subjectId: string;
  chapterId: string;
  body: string;
  type: string;
  answer: string;
  explain: string;
  selects: {
    id: string;
    text: string;
  }[];
  sort: number;
  state: string;
};
