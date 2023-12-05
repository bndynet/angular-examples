import { Component, OnInit } from '@angular/core';
import { Invoker } from './decorator/invoker';
import { routes } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  links = routes.filter(r => r.path).map(r => ({
    text: r.title,
    link: '/' + r.path,
  }));

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
