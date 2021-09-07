import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {Question} from "../domain/question.model";
import {Answer} from "../domain/answer.model";
import {Store} from "@ngxs/store";
import {CheckAnswer, GetQuestions} from "../state/trivia.actions";
import {TriviaState} from "../state/trivia.state";

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.scss']
})
export class TriviaComponent {

  questions: Observable<Question[]>;

  constructor(private store: Store) {
    this.store.dispatch(new GetQuestions());
    this.questions = this.store.select(TriviaState.getQuestions);
  }

  handleAnswer(answer: Answer): void {
    this.store.dispatch(new CheckAnswer(answer));
  }
}
