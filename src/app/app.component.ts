import { Component, OnInit } from '@angular/core';
import { Invoker } from './decorator/invoker';
import { routes } from './app-routing.module';
import { MdwComponent } from './mdw';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <a class="text-3xl font-bold underline" *ngFor="let r of links" routerLink="{{r.link}}">
        {{r.text}}
      </a>
      <mdw></mdw>
      <router-outlet></router-outlet>
    </div>
  `,
})
export class AppComponent implements OnInit {
  links = routes.map(r => ({
    text: r.title,
    link: '/' + r.path,
  }))
  constructor() { }

  ngOnInit() {
    console.group('===== decorator ======');
    const invoker = new Invoker();
    invoker.start();
    console.groupEnd();
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
