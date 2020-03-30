import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';


const routes: Routes = [
  {
    path: 'rest',
    loadChildren: () => import('./rest-office/rest-office.module').then(m => m.RestOfficeModule)
  },
  {
    path: 'graphql',
    loadChildren: () => import('./graphql-office/graphql-office.module').then(m => m.GraphqlOfficeModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
