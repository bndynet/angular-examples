import {
  Component,
  OnInit,
  ViewChild,
  ComponentFactoryResolver,
  OnDestroy,
} from '@angular/core';

import { CompHostDirective } from './comp-host.directive';
import { HiAComponent } from './hi-a';
import { HiBComponent } from './hi-b';
import { HiItem } from './hi-item';

@Component({
  selector: 'dynamic',
  template: `
    <div>
      <h1>Dynamic Component</h1>
      <ng-template compHost></ng-template>
    </div>
  `,
})
export class DynamicComponent implements OnInit, OnDestroy {
  interval: any;
  idx: number = 0;
  compItems: HiItem[] = [
    { key: '0', component: HiAComponent },
    { key: '1', component: HiBComponent },
  ];

  @ViewChild(CompHostDirective, { static: true }) compHost!: CompHostDirective;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {}

  ngOnInit() {
    this.loadComponent();
    this.refreshComp();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    const comp = this.compItems.find(
      (item) => item.key == (this.idx % 2).toString()
    )!.component;

    const componentFactory =
      this.componentFactoryResolver.resolveComponentFactory(comp);
    const viewContainerRef = this.compHost.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (componentRef.instance as any).data = {
      index: this.idx,
      others: {
        date: new Date(),
      },
    };
  }

  refreshComp() {
    this.interval = setInterval(() => {
      this.idx++;
      this.loadComponent();
    }, 3000);
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
