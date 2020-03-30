import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {LazyLoaderService} from './shared/lazy-loader.service';
import {LAZY_WIDGETS} from './shared/tokens';
import {lazyArrayToObj} from './shared/lazy-widgets';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LazyLoaderService, {provide: LAZY_WIDGETS, useFactory: lazyArrayToObj}],
  bootstrap: [AppComponent]
})
export class AppModule {
}
