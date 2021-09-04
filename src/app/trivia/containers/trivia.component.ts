import {Component, OnInit} from '@angular/core';
import {TriviaClient} from "../clients/trivia.client";
import {Observable} from "rxjs";
import {Question} from "../domain/question.model";

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrls: ['./trivia.component.scss']
})
export class TriviaComponent implements OnInit {

  questions: Observable<Question[]>;

  constructor(private client: TriviaClient) {
    this.questions = this.client.getQuestions();
  }

  ngOnInit(): void {
  }

}
