import {Component, ViewChild, ViewContainerRef} from '@angular/core';
import {LazyLoaderService} from './shared/lazy-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Lazy Loading!';
  @ViewChild('container', { read: ViewContainerRef, static: false}) container: ViewContainerRef;

  constructor(private lazyLoadService: LazyLoaderService) {
  }

  load() {
    this.container.clear();
    this.lazyLoadService.loadModule('lazy', this.container);
  }
}
