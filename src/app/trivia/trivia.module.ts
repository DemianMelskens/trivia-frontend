import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TriviaComponent} from './containers/trivia.component';
import {TriviaRoutingModule} from "./trivia-routing.module";
import {MaterialModule} from "../material/material.module";
import {CardComponent} from './components/card/card.component';
import {NgxsModule} from "@ngxs/store";
import {TriviaState} from "./state/trivia.state";
import {FlexLayoutModule} from "@angular/flex-layout";


@NgModule({
  declarations: [
    TriviaComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    TriviaRoutingModule,
    NgxsModule.forFeature([TriviaState])
  ]
})
export class TriviaModule {
}
