import {Answer} from "../domain/answer.model";

export class GetQuestions {
  static readonly type = '[Trivia] Get questions';
}

export class CheckAnswer {
  static readonly type = '[Trivia] Check answer';

  constructor(public answer: Answer) {
  }
}
