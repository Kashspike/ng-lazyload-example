import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GraphqlOfficeComponent } from './graphql-office.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
  path: '',
  component: GraphqlOfficeComponent
}];

@NgModule({
  declarations: [GraphqlOfficeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class GraphqlOfficeModule { }
