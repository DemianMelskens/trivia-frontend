import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TriviaComponent} from './containers/trivia.component';
import {TriviaRoutingModule} from "./trivia-routing.module";


@NgModule({
  declarations: [
    TriviaComponent
  ],
  imports: [
    CommonModule,
    TriviaRoutingModule
  ]
})
export class TriviaModule {
}
