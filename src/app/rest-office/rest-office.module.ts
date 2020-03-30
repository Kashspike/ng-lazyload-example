import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestOfficeComponent } from './rest-office.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
   path: '',
   component: RestOfficeComponent
}];

@NgModule({
  declarations: [RestOfficeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class RestOfficeModule { }
