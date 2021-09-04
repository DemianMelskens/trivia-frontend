import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TriviaComponent} from './containers/trivia.component';
import {TriviaRoutingModule} from "./trivia-routing.module";
import {MaterialModule} from "../material/material.module";
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    TriviaComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    TriviaRoutingModule,
    MaterialModule
  ]
})
export class TriviaModule {
}
