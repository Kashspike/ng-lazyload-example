import {Injectable, Injector, Compiler, Inject, NgModuleFactory, Type, ViewContainerRef} from '@angular/core';
import {LAZY_WIDGETS} from './tokens';

@Injectable({
  providedIn: 'root'
})
export class LazyLoaderService {

  constructor(private injector: Injector, private compiler: Compiler, @Inject(LAZY_WIDGETS) private lazyWidgets: {
    [key: string]: () => Promise<NgModuleFactory<any> | Type<any>> }) {
  }

  async loadModule(name: string, container: ViewContainerRef) {
    const tempModule = await this.lazyWidgets[name]();

    let moduleFactory;
    if (tempModule instanceof NgModuleFactory) {
      moduleFactory = tempModule;
    } else {
      moduleFactory = await this.compiler.compileModuleAsync(tempModule);
    }

    const entryComponent = (moduleFactory.moduleType).loadComp;
    const moduleRef = moduleFactory.create(this.injector);

    const compFactory = moduleRef.componentFactoryResolver.resolveComponentFactory(entryComponent);

    container.createComponent(compFactory);
  }


}
