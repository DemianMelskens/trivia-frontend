import {Injectable} from "@angular/core";
import {Question} from "../domain/question.model";
import {BehaviorSubject} from "rxjs";


interface TriviaState {
  questions: Question[]
}

let _state: TriviaState = {
  questions: []
};

@Injectable({providedIn: 'root'})
export class TriviaStateService {
  private _store$$ = new BehaviorSubject<TriviaState>(_state);
  public _state$ = this._store$$.asObservable();

  constructor() {
  }

  public updateQuestions(questions: Question[]): void {
    this.updateState({..._state, questions});
  }

  private updateState(state: TriviaState): void {
    this._store$$.next(_state = state);
  }
}
