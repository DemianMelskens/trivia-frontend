import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question} from "../../domain/question.model";
import {Answer} from "../../domain/answer.model";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() question?: Question;
  @Output("onAnswer") onAnswer: EventEmitter<Answer> = new EventEmitter<Answer>();

  constructor() {
  }

  ngOnInit(): void {
  }

  pickAnswer(question: string, answer: string): void {
    this.onAnswer.emit({question, answer});
  }
}
