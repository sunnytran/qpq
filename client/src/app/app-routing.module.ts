import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PromptComponent } from './prompt/prompt.component';
import { WinnersComponent } from './winners/winners.component';

const routes: Routes = [{path: '', component: PromptComponent}, {path: 'winners', component: WinnersComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
