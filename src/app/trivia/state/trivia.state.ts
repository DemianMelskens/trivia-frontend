import {Injectable} from "@angular/core";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {Question} from "../domain/question.model";
import {CheckAnswer, GetQuestions} from "./trivia.actions";
import {TriviaClient} from "../clients/trivia.client";

@State<Question[]>({
  name: 'Trivia',
  defaults: []
})
@Injectable({providedIn: "root"})
export class TriviaState {

  constructor(private triviaClient: TriviaClient) {
  }

  @Selector()
  static getQuestions(state: Question[]): Question[] {
    return state;
  }

  @Action(GetQuestions)
  getQuestions(ctx: StateContext<Question[]>): void {
    this.triviaClient.getQuestions().subscribe(questions => {
      ctx.setState(questions);
    })
  }

  @Action(CheckAnswer)
  checkAnswer(ctx: StateContext<Question[]>, {answer}: CheckAnswer): void {
    const questions = ctx.getState();

    this.triviaClient.checkAnswer(answer).subscribe(result => {
      // eslint-disable-next-line no-console
      console.log(`${answer.question} with the answer: ${answer.answer} was: ${result}`);
      ctx.setState(questions.map(question => {
        if (question.question == answer.question) {
          return {...question, correct: result};
        }
        return {...question};
      }));
    });
  }
}
