import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TriviaComponent} from "./containers/trivia.component";

const routes: Routes = [
  {path: '', component: TriviaComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TriviaRoutingModule {
}
